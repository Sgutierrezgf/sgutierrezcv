import React, { useState } from 'react';
import axios from 'axios'
import '../styles/pages/ContactMe.css'


const ContacMe = () => {

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleServerResponse = (ok: boolean, msg: any) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            })
            setInputs({
                name: '',
                email: '',
                message: ''
            })
        } else {
            // setStatus({
            //     // info: { error: true, msg: msg }
            // })
        }
    }
    const handleOnChange = (e: { persist: () => void; target: { id: any; value: any; }; }) => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        })
    }
    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        axios({
            method: 'POST',
            url: 'https://formspree.io/moqzvewr',
            data: inputs
        })
            .then((response: any) => {
                handleServerResponse(
                    true,
                    'Thank you, your message has been submitted.'
                )
            })
            .catch((error: { response: { data: { error: any; }; }; }) => {
                handleServerResponse(false, error.response.data.error)
            })
    }

    return (
        <section className='ContactMe'>
            <div
                className="ContactMe-message"
                data-id="2a167c9b"
                data-element_type="column"
                data-settings='{"background_background":"classic"}'
            >
                <h1>Contact me</h1>
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
                                        <strong>Name: </strong> Sebastian Gutierrez Guisao<br /><strong>Address: </strong>
                                        Medellin, Colombia<br /><strong>Phone: </strong> +057 3012363606<br /><strong
                                        >Hours: </strong>
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
                data-status="init"
                onSubmit={sendEmail}
            >
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
                            id="name"
                            type="text"
                            name="_name"
                            onChange={handleOnChange}
                            required
                            value={inputs.name}
                        />
                    </span>
                    <span className="input-default-text" >Name</span>
                </p>
                <p className="contact-Me-relative">
                    <br />
                    <span className="wpcf7-form-control-wrap" data-name="your-email">
                        <input size={40}
                            className="contact-Me-email"
                            id="email"
                            type="email"
                            name="_replyto"
                            onChange={handleOnChange}
                            required
                            value={inputs.email} />
                    </span>
                    <span className="input-default-text">Email</span>
                </p>
                <p className="contact-Me-relative">
                    <br />
                    <span className="wpcf7-form-control-wrap" data-name="your-message">
                        <textarea cols={40} rows={10}
                            className="ContactMe-textArea"
                            aria-invalid="false"
                            id="message"
                            name="message"
                            placeholder=""
                            onChange={handleOnChange}
                            required
                            value={inputs.message}
                        >
                        </textarea>

                    </span>
                    <span className="input-default-text">Message</span>
                </p>
                <div>
                </div>
                <div>
                    <button className='contactMe-button' type='submit' value='Send'>
                        <span> {!status.submitting
                            ? !status.submitted
                                ? 'Submit'
                                : 'Submitted'
                            : 'Submitting...'}</span>
                    </button>
                </div>

            </form>
            {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </section>
    )
}
export default ContacMe;