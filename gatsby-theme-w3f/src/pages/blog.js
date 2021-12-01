import { graphql } from 'gatsby';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import BlogList from '../components/blog/List';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function BlogPage({ data }) {
  const posts = data.allPosts.edges;
  const featuredPosts = data.featuredPosts.edges;
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title="Posts" />
      <header>
        <h1>{t('posts.title')}</h1>
        <nav>
          <Link to="/tags">{t('tags.title')}</Link>
        </nav>
      </header>
      {featuredPosts ? (
        <section>
          <h1>Featured posts</h1>
          <BlogList models={featuredPosts} />
        </section>
      ) : null}
      {posts ? (
        <section>
          <h1>All posts</h1>
          <BlogList models={posts} />
        </section>
      ) : null}
    </Layout>
  );
}

export const query = graphql`
  query ($language: String) {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allPosts: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___created_at }
      filter: { fields: { langKey: { eq: $language } }, fileAbsolutePath: { regex: "//(posts)/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            tags
            slug
            featured_image {
              childImageSharp {
                gatsbyImageData(width: 200, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
          fields {
            langKey
            slug
          }
        }
      }
    }
    featuredPosts: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___created_at }
      filter: {
        fields: { langKey: { eq: $language } }
        fileAbsolutePath: { regex: "//(posts)/" }
        frontmatter: { is_featured: { eq: true } }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            tags
            slug
            featured_image {
              childImageSharp {
                gatsbyImageData(width: 200, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
          fields {
            langKey
            slug
          }
        }
      }
    }
  }
`;
