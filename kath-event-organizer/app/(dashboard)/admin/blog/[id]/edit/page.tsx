import BlogFormPage from "@/features/blog/pages/BlogFormPage";

export default function Page() {
    // We pass the isEdit prop to tell the component to behave as an editor
    return <BlogFormPage isEdit={true} />;
}
