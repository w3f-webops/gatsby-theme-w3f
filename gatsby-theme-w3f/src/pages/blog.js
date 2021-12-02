import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import ListPosts from '../components/blog/List';
import ListCategories from '../components/blog/ListCategories';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function BlogPage({ data }) {
  const posts = data.allPosts.edges;
  const featuredPosts = data.featuredPosts.edges;
  const allCategories = data.allCategories.edges;
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title="Posts" />
      <header>
        <h1>{t('posts.title')}</h1>
        {allCategories ? <ListCategories models={allCategories} /> : null}
      </header>

      <main>
        {featuredPosts ? (
          <section>
            <h1>Featured posts</h1>
            <ListPosts models={featuredPosts} />
          </section>
        ) : null}
        {posts ? (
          <section>
            <h1>All posts</h1>
            <ListPosts models={posts} />
          </section>
        ) : null}
      </main>
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
    allCategories: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___index }
      filter: { fields: { langKey: { eq: $language } }, fileAbsolutePath: { regex: "//(categories)/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            index
          }
          fields {
            langKey
            slug
          }
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
