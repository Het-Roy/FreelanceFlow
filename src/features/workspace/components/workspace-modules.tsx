import { WorkspaceModules } from "../data/module"

export function WorkspaceModule() {
    return (
        <section className="modules-section" aria-labelledby="modules-heading">
            <div className="section-header">
                <h2 id="modules-heading">
                    Workspace modules
                </h2>

                <span>OUR DEVELOPMENT ROADMAP</span>
            </div>

            <div className="module-grid">
                {WorkspaceModules.map((module, index) => (
                    <article key={module.id} className="module-card">
                        <div className="module-card-header">
                            <span className="module-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="module-status">
                                PLANNED
                            </span>
                        </div>

                        <h3>{module.name}</h3>
                        <p>{module.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}