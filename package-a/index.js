const PROJECT = {
  title: "package a",
  subtitle: "This is package a in a monorepo",
};

export function getSiteInfo() {
  return { title: PROJECT.title, subtitle: PROJECT.subtitle };
}

console.log("this represents a build script on package a");
