export function getAllBlogs() {
    const modules = import.meta.glob(
        "/src/Blogs/Blogs/*.mdx",
        { eager: true }
    );

    return Object.entries(modules).map(([path, mod]) => {
        return {
            title: mod.frontmatter.title,
            slug: mod.frontmatter.slug,
            description: mod.frontmatter.description,
            date: mod.frontmatter.date,
            tags: mod.frontmatter.tags
                ?.split(",")
                .map(t => t.trim()),
            image: mod.frontmatter.image,
            Component: mod.default,
        };
    });
}