export default function Footer({ name }) {
    return (
        <footer className="py-6">
            <div className="container mx-auto text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} {name}. Built with Next.js & Tailwind CSS.</p>
            </div>
        </footer>
    );
}