function SectionHeader(props) {
    const { title } = props;
    return (
        <>
            <section className="section-header">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 text-center">
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionHeader;
