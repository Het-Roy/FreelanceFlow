type SectionPlaceholderProps = {
    title : string,
    description : string
}

export function SectionPlaceholder ({title , description} : SectionPlaceholderProps) {
    return (
        <section className="page-content">
        <div className="page-heading">
            <p className="eyebrow">WORKSPACE</p>

            <h1>{title}</h1>

            <p>{description}</p>
        </div>

        <div className="empty-state">
            <h2>Coming in a later development phase</h2>

            <p>
            This section is part of FreelanceFlow.
            We will implement its functionality later.
            </p>
        </div>
        </section>
    );
}