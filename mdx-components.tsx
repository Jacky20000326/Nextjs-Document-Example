import type { MDXComponents } from "mdx/types";
import { Typography, Link as MuiLink, Box, Divider } from "@mui/material";

const components: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1
      component="h1"
      style={{
        margin: "2rem 0 1rem 0",
        color: "#ebebeb",
        textDecoration: "wavy underline",
        textDecorationColor: "#b6aca4",
        textUnderlineOffset: "6px",
        textDecorationThickness: "2px",

        fontSize: "2rem",
      }}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      component="h2"
      style={{ margin: "2rem 0 2rem 0", fontSize: "1.5rem" }}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      component="h3"
      style={{ margin: "2rem 0 1rem 0", color: "#ebebeb" }}
      {...props}
    >
      {" "}
      {children}{" "}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <Typography
      component="h4"
      variant="h6"
      color="text.primary"
      sx={{ mt: 2.5, mb: 1.25 }}
      {...props}
    >
      {children}
    </Typography>
  ),
  h5: ({ children, ...props }) => (
    <Typography
      component="h5"
      variant="h6"
      color="text.primary"
      sx={{ mt: 2, mb: 1 }}
      {...props}
    >
      {children}
    </Typography>
  ),
  h6: ({ children, ...props }) => (
    <Typography
      component="h6"
      variant="h6"
      color="text.secondary"
      sx={{ mt: 1.5, mb: 0.75 }}
      {...props}
    >
      {children}
    </Typography>
  ),
  p: ({ children, ...props }) => (
    <Typography
      component="p"
      variant="article"
      color="#fff"
      sx={{ my: 1.5, fontWeight: 400 }}
      {...props}
    >
      {children}
    </Typography>
  ),
  a: ({ children, href, ...props }) => (
    <MuiLink
      href={href as string}
      color="primary.main"
      sx={{ fontWeight: 600, "&:hover": { opacity: 0.85 } }}
      {...props}
    >
      {children}
    </MuiLink>
  ),
  ul: ({ children, ...props }) => (
    <ul
      style={{
        paddingLeft: "18px",
        m: 1.5,
        color: "#fff",
      }}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      style={{
        fontSize: "18px",
        paddingLeft: "2.5em",
        m: 1.5,
        color: "#fff",
      }}
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <Box component="li" sx={{ color: "#fff", marginLeft: 1.5 }} {...props}>
      {children}
    </Box>
  ),
  blockquote: ({ children, ...props }) => (
    <Box
      component="blockquote"
      sx={{
        my: 2,
        px: 2,
        py: 0.5,
        borderLeft: 4,
        borderColor: "#dbdbdb",
        bgcolor: "#967458",
        color: "text.secondary",
        borderRadius: 1.5,
        maxWidth: "90%",
      }}
      {...props}
    >
      {children}
    </Box>
  ),
  hr: (props) => (
    <Divider sx={{ my: 3, borderColor: "sidebar.divider" }} {...props} />
  ),
  code: ({ children, ...props }) => (
    <Box
      component="code"
      sx={{
        px: 0.75,
        py: 0.25,
        mx: 0.25,
        borderRadius: 1,
        bgcolor: "background.paper",
        color: "text.primary",
        fontFamily: "var(--font-geist-mono), monospace",
      }}
      {...props}
    >
      {children}
    </Box>
  ),
  pre: ({ children, ...props }) => (
    <Box
      component="pre"
      sx={{
        my: 2,
        p: 2,
        overflowX: "auto",
        bgcolor: "background.paper",
        color: "text.secondary",
        borderRadius: 1.5,
        border: "1px solid",
        borderColor: "divider",
        fontFamily: "var(--font-geist-mono), monospace",
        maxWidth: "80%",
      }}
      {...props}
    >
      {children}
    </Box>
  ),
  img: ({ ...props }) => (
    <Box
      component="img"
      sx={{
        maxWidth: "100%",
        height: "auto",
        borderRadius: 1.5,
        display: "block",
        my: 2,
        boxShadow: 1,
      }}
      {...props}
    />
  ),
  table: ({ children, ...props }) => (
    <Box
      component="table"
      sx={{
        width: "100%",
        borderCollapse: "collapse",
        my: 2,
        "& th, & td": {
          border: "1px solid",
          borderColor: "sidebar.divider",
          p: 1.25,
        },
        "& th": {
          bgcolor: "background.paper",
          color: "text.primary",
          fontWeight: 600,
        },
      }}
      {...props}
    >
      {children}
    </Box>
  ),
  strong: ({ children, ...props }) => (
    <Box component="strong" sx={{ color: "text.primary" }} {...props}>
      {children}
    </Box>
  ),
  em: ({ children, ...props }) => (
    <Box component="em" sx={{ color: "text.secondary" }} {...props}>
      {children}
    </Box>
  ),
};

export function useMDXComponents(override?: MDXComponents): MDXComponents {
  return {
    ...override,
    ...components,
  };
}
