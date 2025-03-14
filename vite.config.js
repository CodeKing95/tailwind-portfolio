export default {
  base: "/tailwind-portfolio/",
  build: {
    rollupOptions: {
      input: {
        index: "./index.html",
        impressum: "./impressum.html",
      },
    },
  },
};
