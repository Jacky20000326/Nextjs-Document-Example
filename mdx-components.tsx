import type { MDXComponents } from "mdx/types";
import { Typography, Link as MuiLink, Box, Divider } from "@mui/material";

const components: MDXComponents = {
  h1: ({ children, ...props }) => (
    <Typography
      component="h1"
      variant="h3"
      color="text.primary"
      sx={{ mt: 4, mb: 2, fontWeight: 600 }}
      {...props}
    >
      {children}
    </Typography>
  ),
  h2: ({ children, ...props }) => (
    <Typography
      component="h2"
      variant="h4"
      color="text.primary"
      sx={{ mt: 3.5, mb: 1.75, fontWeight: 600 }}
      {...props}
    >
      {children}
    </Typography>
  ),
  h3: ({ children, ...props }) => (
    <Typography
      component="h3"
      variant="h5"
      color="text.primary"
      sx={{ mt: 3, mb: 1.5, fontWeight: 600 }}
      {...props}
    >
      {children}
    </Typography>
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
      color="sidebar.secondary"
      sx={{ my: 1.5 }}
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
    <Box component="ul" sx={{ pl: 3, my: 1.5 }} {...props}>
      {children}
    </Box>
  ),
  ol: ({ children, ...props }) => (
    <Box component="ol" sx={{ pl: 3, my: 1.5 }} {...props}>
      {children}
    </Box>
  ),
  li: ({ children, ...props }) => (
    <Box
      component="li"
      sx={{ my: 0.75, "&::marker": { color: "primary.main" } }}
      {...props}
    >
      {children}
    </Box>
  ),
  blockquote: ({ children, ...props }) => (
    <Box
      component="blockquote"
      sx={{
        my: 2,
        px: 2,
        py: 1.5,
        borderLeft: 4,
        borderColor: "primary.main",
        bgcolor: "background.paper",
        color: "text.secondary",
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
        border: "1px solid",
        borderColor: "divider",
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
