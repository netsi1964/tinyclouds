import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Sten Hougaard",
  author: "Sten Hougaard",
  avatar: "./netsi1964.png",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:netsi1964@gmail.com" },
    { title: "GitHub", url: "https://github.com/netsi1964" },
  ],
  background: "#fff",
  middlewares: [
    ga(""),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
