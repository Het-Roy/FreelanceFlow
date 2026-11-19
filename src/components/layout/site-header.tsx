import Link from "next/link";

export function SiteHeader () {
    return (
        <header className="site-header">

            <Link href='/' className="brand">
                <span className="brand-mark">FF</span>
                <span>FreelanceFlow</span>
            </Link>

            <span className="header-note">
                Freelance Workspace
            </span>

        </header>
    )
}