import * as React from "react";

// @ts-ignore
import { Link, graphql } from "gatsby";
import { Layout } from "../components/Layout";

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
        <u
          style={{
            paddingBottom: 5,
            textDecoration: "none",
            borderBottom: "3px solid #05f"
          }}
        >
          Overview{" "}
        </u>
      </h2>
      <p>
        We'll be splitting up into smaller teams, with at least one developer
        and one designer. Our goal is to create a shared design system with
        components built with interactions. Through this, we'll gain a deeper
        understanding of what the collaboration aspect looks like in Framer X.
      </p>

      <h2>
        <u
          style={{
            paddingBottom: 5,
            textDecoration: "none",
            borderBottom: "3px solid #05f"
          }}
        >
          Important Notes
        </u>
      </h2>
      <p>
        It's important to remember that Framer Web is in an early beta stage,
        and only available for attendees of Framer X for Teams at Loupe 2019.
      </p>

      <p>
        With this in mind, there are a few things you should know about the
        current status and usage of Framer Web. If there are any blockers for
        you and your team, you can always resort to Framer X to finish your
        components.
      </p>

      <h4 style={{ fontSize: 20 }}>
        Preview might not be as accurate as in Framer X.
      </h4>

      <p>
        This is a small, but unfortunate bug in Framer Web at the moment. While
        it should work in most cases, it's important to keep this in mind.
      </p>

      <h4 style={{ fontSize: 20 }}>
        Some shortcuts might not work the same as in Framer X.
      </h4>

      <p>
        Another small bug, but shouldn't cause any major problems when working
        in your project.
      </p>

      <h4 style={{ fontSize: 20 }}>
        While multiple people can design on the canvas, the code editor is still
        limited to one person at a time.
      </h4>

      <p>
        We're splitting our groups up in a way where there should only be one
        lead developer in the project at a time, but this is another thing to
        keep in mind when creating your components. You can always start a new
        project and code in a seperate project if you'd like to code yourself!
      </p>

      <h2>
        <u
          style={{
            paddingBottom: 5,
            textDecoration: "none",
            borderBottom: "3px solid #05f"
          }}
        >
          Resources
        </u>
      </h2>
      <p>
        While building components for a design system, it's important to know
        some guidelines and rules around the things we're building.
      </p>
      <p>Here, you'll find information on:</p>
      <ul>
        <li>Minimum requirements for components</li>
        <li>Color and design tokens</li>
        <li>Code Templates</li>
      </ul>
      <p>
        In addition, you can find more information + tips about the components
        you're creating on the relevant page on the sidebar.
      </p>
      <h2>
        <u
          style={{
            paddingBottom: 5,
            textDecoration: "none",
            borderBottom: "3px solid #05f"
          }}
        >
          Minimum Requirements
        </u>
      </h2>
      <p>
        Our end goal is to end up with a library of functional components built
        in code, so it's important to know some minimum requirements your
        component should have.
      </p>
      <p>Every code component should at least have the following:</p>

      <ul>
        <li>Default State</li>
        <li>Interaction State (Hover/Drag/Click)</li>
      </ul>

      <p>
        For Interactions, see the <b>tips</b> section for your component for
        ideas.
      </p>

      <h2>
        <u
          style={{
            paddingBottom: 5,
            textDecoration: "none",
            borderBottom: "3px solid #05f"
          }}
        >
          Color Tokens
        </u>
      </h2>
      <p>
        We have some already defined colors ready to be used, which you can use
        in the canvas or as variables in your code. See{" "}
        <Link to="/content/Colors">here</Link> for more information on Colors.
      </p>

      <h4>Primary Colors</h4>

      <p>
        The primary color is the color displayed most frequently across your
        app’s screens and components. It for has an active variant which is used
        for hovers, active states or accents.
      </p>

      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "white",
            background: "#0055ff"
          }}
        >
          <code>primary</code> #0055FF
        </p>
      </p>

      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#98E7FF"
          }}
        >
          <code>primaryActive</code> #98E7FF
        </p>
      </p>

      <h4>Secondary Colors</h4>

      <p>
        The secondary color provides more ways to accent and distinguish your
        product. It has an active variant which is used for hovers, active
        states or accents.{" "}
      </p>

      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#FF7744"
          }}
        >
          <code>secondary</code> #FF7744
        </p>
      </p>

      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#FFC6A8"
          }}
        >
          <code>secondaryActive</code> #FFC6A8
        </p>
      </p>

      <h4>Destructive Colors</h4>

      <p>
        The destructive color indicates errors in components, such as invalid
        text in a text field or actions that might cause a big change.
      </p>

      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "white",
            background: "#A61A14"
          }}
        >
          <code>destructive</code> #A61A14
        </p>
      </p>
      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#D4504C"
          }}
        >
          <code>destructiveActive</code> #D4504C
        </p>
      </p>

      <h4 id="disabled">Disabled</h4>

      <p>The disabled color indicates disabled states. </p>

      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#C9C7C5"
          }}
        >
          <code>disabled</code> #C9C7C5
        </p>
      </p>

      <h4>Background / Surface Colors</h4>

      <p>
        Background colors affect surfaces of components, such as cards, sheets,
        and menus. They can also appear behind content (e.g. behind scrollable
        content)
      </p>

      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#E7FFF7"
          }}
        >
          <code>backgroundPrimary</code> #E7FFF7
        </p>
      </p>
      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#FFF9DA"
          }}
        >
          <code>backgroundSecondary</code> #FFF9DA
        </p>
      </p>
      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#F3F2F2"
          }}
        >
          <code>backgroundGeneral</code> #F3F2F2
        </p>
      </p>

      <h4>"On" Colors</h4>

      <p>
        “On” colors are primarily applied to text, iconography, and strokes and
        are used on top of other colors.
      </p>

      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "white",
            background: "#000000"
          }}
        >
          <code>onLight</code> #000000
        </p>
      </p>
      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#8A8A8A"
          }}
        >
          <code>gray1</code> #8A8A8A
        </p>
      </p>
      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#BBBBBB"
          }}
        >
          <code>gray2</code> #BBBBBB
        </p>
      </p>
      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#F3F2F2"
          }}
        >
          <code>gray3</code> #F3F2F2
        </p>
      </p>
      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#FFFFFF"
          }}
        >
          <code>onDark</code> #FFFFFF
        </p>
      </p>

      <h4>Alternative Colors</h4>

      <p>
        Alternative colors can be used to establish themes that distinguish
        different sections.
      </p>

      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#FF0055"
          }}
        >
          <code>alternative1</code> #FF0055
        </p>
      </p>
      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#AA00FF"
          }}
        >
          <code>alternative2</code> #AA00FF
        </p>
      </p>
      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "black",
            background: "#00D5FF"
          }}
        >
          <code>alternative3</code> #00D5FF
        </p>
      </p>
      <p>
        <p
          style={{
            paddingLeft: 10,
            marginBottom: 0,
            color: "white",
            background: "#2B00FF"
          }}
        >
          <code>alternative4</code> #2B00FF
        </p>
      </p>

      <h3>Using Shared Colors</h3>

      <p>
        The shared colors above can be used both on the Framer Canvas, and
        through code. Click{" "}
        <a href="https://www.framer.com/blog/posts/introducing-shared-colors/">
          here
        </a>{" "}
        to learn more about Shared Colors in Framer X.
      </p>

      <p>
        Through code, you can apply Shared Colors both in Overrides, and in the
        actual component itself. If you're not too familiar with Code Overrides
        in Framer X, you can click{" "}
        <a href="https://www.framer.com/support/using-framer-x/code-overrides/">
          here
        </a>{" "}
        to get a quick explanation.
      </p>

      <h4 style={{ marginBottom: 10 }}>Using colors in Code Overrides</h4>

      <code>
        <pre style={{ padding: 10 }}>
          import {"{"} Override {"}"} from "framer"{"\n"}
          import {"{"} colors {"}"} from
          "@framer/aroagb.loupe-colors/code/canvas"{"\n"}
          {"\n"}
          export function Primary(): Override {"{\n"}
          {"    "}return {"{\n"}
          {"        "}whileHover: {"{"} background: colors.primaryActive {"}\n"}
          {"    "}
          {"}\n"}
          {"}\n"}
        </pre>
      </code>

      <h4 style={{ marginBottom: 10 }}>Using colors in Code Components</h4>

      <code>
        <pre style={{ padding: 10 }}>
          import * as React from "react"{"\n"}
          import {"{"} Frame {"}"} from "framer"{"\n"}
          import {"{"} colors {"}"} from
          "@framer/aroagb.loupe-colors/code/canvas"{"\n"}
          {"\n"}
          export function Component() {"{\n"}
          {"    "}return &lt;Frame background={"{"}colors.backgroundPrimary
          {"}/"}&gt;
          {";\n"}
          {"}\n"}
        </pre>
      </code>

      <h2>
        <u
          style={{
            paddingBottom: 5,
            textDecoration: "none",
            borderBottom: "3px solid #05f"
          }}
        >
          Code Templates
        </u>
      </h2>

      <p>
        When coding your component, you can use the following template to speed
        things up. You can also find a template on your component's
        documentation page.
      </p>

      <code>
        <pre style={{ padding: 10 }}>
          import * as React from "react"{"\n"}
          import {"{"} Frame {"}"} from "framer"{"\n"}
          import {"{"} colors {"}"} from
          "@framer/aroagb.loupe-colors/code/canvas"{"\n"}
          {"\n"}
          export function Component() {"{\n"}
          {"    "}return &lt;Frame style={"{"}
          {"{"}
          {"}"}
          {"}/"}&gt;
          {";\n"}
          {"}\n"}
        </pre>
      </code>

      <p>
        The template is a good starting point, and includes a PropertyControl to
        change the variant (primary, secondary) through the props. If you're not
        too familiar with Property Controls in Framer X, you can click{" "}
        <a href="https://www.framer.com/api/property-controls/">here</a> to get
        a quick explanation.
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
