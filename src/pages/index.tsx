import * as React from "react";

// @ts-ignore
import { Link, graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { motion } from "framer-motion";

export const IndexPage = (props: any) => {
  return (
    <>
      <h1 style={{ marginBottom: 10 }}>Loupe 2019</h1>
      <h2 style={{ marginBottom: 60 }}>Framer X for Teams</h2>
      <p>
        Welcome to <a href="https://www.framer.com/loupe/">Loupe 2019</a>, a
        conference on interactive design and creative coding.
      </p>
      <p>
        Here at Framer, we're aiming to fully bridge the gap between designers
        and developers, through collaboration and shared design systems. Today,
        we'll be exploring this workflow together!
      </p>
      <h2>
        {" "}
        <motion.u
          animate={{
            borderBottom: [
              "3px solid #0055FF",
              "3px solid #FFF9DA",
              "3px solid #E7FFF7",
              "3px solid #FFC6A8",
              "3px solid #FF7744",
              "3px solid #F3F2F2"
            ]
          }}
          style={{
            paddingBottom: 5,
            textDecoration: "none",
            borderBottom: "3px solid #05f"
          }}
          transition={{
            yoyo: Infinity,
            ease: "linear",
            duration: 20
          }}
        >
          Overview{" "}
        </motion.u>
      </h2>
      <p>
        We'll be splitting up into smaller teams, with at least one developer
        and one designer. Our goal is to create a shared design system with
        interactive components to fill in the landing page shown at the
        beginning of the workshop.
      </p>

      <p>
        Each team will be assigned one component and will need to choose a
        Design and Development lead.
      </p>

      <p>
        <b>Design Leads</b> are responible for:
      </p>
      <ul>
        <li>Creating the project and sharing it with the team</li>
        <li>Publishing the final component to the store</li>
        <li>Making sure everyone's opinions are included</li>
      </ul>

      <p>
        <b>Development Leads</b> are responible for:
      </p>
      <ul>
        <li>Understanding the requirements from the designers</li>
        <li>Coding the component</li>
      </ul>

      <p>
        Your team has <b>one hour</b> to complete the design and code for the
        component.
      </p>

      <p>Workflow:</p>

      <h2>
        <motion.u
          animate={{
            borderBottom: [
              "3px solid #0055FF",
              "3px solid #FFF9DA",
              "3px solid #E7FFF7",
              "3px solid #FFC6A8",
              "3px solid #FF7744",
              "3px solid #F3F2F2"
            ]
          }}
          style={{
            paddingBottom: 5,
            textDecoration: "none",
            borderBottom: "3px solid #05f"
          }}
          transition={{
            yoyo: Infinity,
            ease: "linear",
            duration: 20
          }}
        >
          Resources
        </motion.u>
      </h2>
      <p>
        We've provided some templates and guidelines for building your
        components. See your component's page for more information on:
      </p>

      <ul>
        <li>
          <Link to={"/content/Colors"}>Color tokens</Link>
        </li>
        <li>Minimum requirements</li>
        <li>Starting templates</li>
      </ul>

      <h2>
        <motion.u
          animate={{
            borderBottom: [
              "3px solid #FFC6A8",
              "3px solid #0055FF",
              "3px solid #E7FFF7",
              "3px solid #FFF9DA",
              "3px solid #FF7744",
              "3px solid #F3F2F2"
            ]
          }}
          style={{
            paddingBottom: 5,
            textDecoration: "none",
            borderBottom: "3px solid #05f"
          }}
          transition={{
            yoyo: Infinity,
            ease: "linear",
            duration: 20
          }}
        >
          Important Notes
        </motion.u>
      </h2>
      <p>
        <b>Framer Web is in an early beta stage</b>, and is only available for
        attendees of Framer X for Teams at Loupe 2019. With this in mind, there
        are a few things you should know about the current status and usage of
        Framer Web.
      </p>

      <ul>
        <li>Preview might not be as accurate as in Framer X.</li>

        <li>Some shortcuts might not work the same as in Framer X.</li>

        <li>
          While multiple people can design on the canvas, only one person can
          code per tsx file.
        </li>

        <li>Don't share any screenshots or links outside of this workshop.</li>
      </ul>

      <p>
        If there are any blockers for you and your team, you can always resort
        to Framer X to finish your components.
      </p>
    </>
  );
};

const LayoutIndexPage = () => (
  <Layout>
    <IndexPage />
  </Layout>
);

export default LayoutIndexPage;

export const pageQuery = graphql`
  query {
    home: allMdx(filter: { frontmatter: { title: { eq: "Home" } } }, limit: 1) {
      edges {
        node {
          id
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            date(formatString: "MMMM D, YYYY")
            tags
          }
        }
      }
    }
  }
`;
