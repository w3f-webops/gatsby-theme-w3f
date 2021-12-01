import { graphql } from 'gatsby';
import React from 'react';

import BlogPage from '../components/blog/Page';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function BlogPostPage({ data }) {
  const { markdownRemark, latestPosts, relatedPosts } = data;
  return (
    <Layout>
      <SEO title="Post" />
      {markdownRemark ? (
        <BlogPage model={markdownRemark} latestPosts={latestPosts.edges} relatedPosts={relatedPosts.edges} />
      ) : null}
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!, $language: String, $tags: [String!]) {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    markdownRemark(
      fields: { slug: { eq: $slug }, langKey: { eq: $language } }
      fileAbsolutePath: { regex: "//(posts)/" }
    ) {
      html
      frontmatter {
        title
        slug
        tags
        created_at
        featured_image {
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
    latestPosts: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___created_at }
      filter: { fields: { langKey: { eq: $language } }, fileAbsolutePath: { regex: "//(posts)/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            created_at
          }
          fields {
            slug
          }
        }
      }
    }
    relatedPosts: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___created_at }
      filter: {
        fields: { langKey: { eq: $language } }
        fileAbsolutePath: { regex: "//(posts)/" }
        frontmatter: { tags: { in: $tags } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            created_at
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
