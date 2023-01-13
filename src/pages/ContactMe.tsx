import '../styles/pages/ContactMe.css'

const ContacMe = () => (
    <section className='ContactMe'>
        <div
            className="ContactMe-message"
            data-id="2a167c9b"
            data-element_type="column"
            data-settings='{"background_background":"classic"}'
        >
            <div className="ContactMe-message-info">
                <div className="elementor-widget-wrap">
                    <div
                        className="elementor-element elementor-element-7359de63 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                        data-id="7359de63"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                    >
                        <div className="elementor-widget-container">
                            <div className="ContactMe-message-text">
                                <p>
                                    A frontend developer always ready to face <strong>new challengese</strong> that this life puts in front of me.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-317016ce elementor-widget elementor-widget-text-editor"
                        data-id="317016ce"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                    >
                        <div className="elementor-widget-container">
                            <div className="ContactMe-message-text">
                                If you like my profile please contact me, I leave you my contact information.
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-8b64ff7 elementor-widget elementor-widget-text-editor"
                        data-id="8b64ff7"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                    >
                        <div className="elementor-widget-container">
                            <div className="ContactMe-message-text">
                                <p>
                                    <strong>Name:</strong> Sebastian Gutierrez Guisao<br /><strong>Address:</strong>
                                    Medellin, Colombia<br /><strong>Phone:</strong> +054 3012363606<br /><strong
                                    >Hours:</strong
                                    >
                                    6:00 am – 16:00 pm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <form method="post"
            className="ContactMe-form"
            aria-label="Contact form"
            data-status="init">
            <div style={{ display: "none" }}>
                <input type="hidden" name="_wpcf7" value="5" />
                <input type="hidden" name="_wpcf7_version" value="5.7.2" />
                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f5-p313-o1" />
                <input type="hidden" name="_wpcf7_container_post" value="313" />
                <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
            </div>
            <p className="contact-Me-relative">
                <br />
                <span className="wpcf7-form-control-wrap" data-name="your-name">
                    <input size={40}
                        className="contact-Me-name"
                        type="text" />
                </span>
                <span className="input-default-text">Name</span>
            </p>
            <p className="contact-Me-relative">
                <br />
                <span className="wpcf7-form-control-wrap" data-name="your-email">
                    <input size={40}
                        className="contact-Me-email"
                        type="email"
                        name="your-email" />
                </span>
                <span className="input-default-text">Email</span>
            </p>
            <p className="contact-Me-relative">
                <br />
                <span className="wpcf7-form-control-wrap" data-name="your-message">
                    <textarea cols={40} rows={10}
                        className="ContactMe-textArea"
                        aria-invalid="false"
                        name="your-message"
                        placeholder="">
                    </textarea>
                </span>
                <span className="input-default-text">Message</span>
            </p>
            <div>
            </div>
            <div>
                <button className='contactMe-button'>
                    <span>SEND MESSAGE</span>
                </button>
            </div>

        </form>
    </section>
)

export default ContacMe;