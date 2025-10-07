import { useEffect } from 'react';
import ScrollToTop from '../components/ScrollToTop';

function PrivacyPolicy() {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div>
            <ScrollToTop />
            <head>
                <title>Zentra Hosting | Privacy policy</title>
                <meta name="description" content="Zentra Hosting Privacy Policy" />
                <style href='src/assets/style/privacy.css'></style>
            </head>
            <h1>PRIVACY POLICY</h1>

            <div class="intro">
                This Privacy Policy applies to all personal information collected by Zentra Hosting (we, us or our) via the website located at zentrahosting.xyz (Website).
            </div>

            <h2>What information do we collect?</h2>

            <p>The kind of Personal Information that we collect from you will depend on how you use the website. The Personal Information which we collect and hold about you may include:</p>

            <ul>
                <li>Login Credentials</li>
                <li>Email Address</li>
                <li>Name</li>
                <li>Phone Number</li>
                <li>Address</li>
            </ul>

            <h2>Types of information</h2>

            <p>The Privacy Act 1998 (Cth) (Privacy Act) defines types of information, including Personal Information and Sensitive Information.</p>

            <p><strong>Personal Information</strong> means information or an opinion about an identified individual or an individual who is reasonably identifiable:</p>

            <ul>
                <li>whether the information or opinion is true or not; and</li>
                <li>whether the information or opinion is recorded in a material form or not.</li>
            </ul>

            <p>If the information does not disclose your identity or enable your identity to be ascertained, it will in most cases not be classified as “Personal Information” and will not be subject to this privacy policy.</p>

            <p><strong>Sensitive Information</strong> is defined in the Privacy Act as including information or opinion about such things as an individual's racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record or health information.</p>

            <p>Sensitive Information will be used by us only:</p>

            <ul>
                <li>for the primary purpose for which it was obtained;</li>
                <li>for a secondary purpose that is directly related to the primary purpose; and</li>
                <li>with your consent or where required or authorised by law.</li>
            </ul>

            <h2>How we collect your Personal Information</h2>

            <p>We may collect Personal Information from you whenever you input such information into the Website, related app or provide it to Us in any other way.</p>

            <p>We may also collect cookies from your computer which enable us to tell when you use the Website and also to help customise your Website experience. As a general rule, however, it is not possible to identify you personally from our use of cookies.</p>

            <p>We generally don’t collect Sensitive Information, but when we do, we will comply with the preceding paragraph.</p>

            <p>Where reasonable and practicable we collect your Personal Information from you only. However, sometimes we may be given information from a third party, in cases like this we will take steps to make you aware of the information that was provided by a third party.</p>

            <h2>Purpose of collection</h2>

            <p>We collect Personal Information to provide you with the best service experience possible on the Website and keep in touch with you about developments in our business.</p>

            <p>We customarily only disclose Personal Information to our service providers who assist us in operating the Website. Your Personal Information may also be exposed from time to time to maintenance and support personnel acting in the normal course of their duties.</p>

            <p>By using our Website, you consent to the receipt of direct marketing material. We will only use your Personal Information for this purpose if we have collected such information direct from you, and if it is material of a type which you would reasonably expect to receive from use. We do not use sensitive Personal Information in direct marketing activity. Our direct marketing material will include a simple means by which you can request not to receive further communications of this nature, such as an unsubscribe button link.</p>

            <h2>Security, Access and correction</h2>

            <p>We store your Personal Information in a way that reasonably protects it from unauthorised access, misuse, modification or disclosure. When we no longer require your Personal Information for the purpose for which we obtained in, we will take reasonable steps to destroy and anonymise or de-identify it. Most of the Personal Information that is stored in our client files and records will be kept for a maximum of 7 years to fulfill our record keeping obligations.</p>

            <p>The Australian Privacy Principles:</p>

            <ul>
                <li>permit you to obtain access to the Personal Information we hold about you in certain circumstances (Australian Privacy Principle 12); and</li>
                <li>allow you to correct inaccurate Personal Information subject to certain exceptions (Australian Privacy Principle 13).</li>
            </ul>

            <p>Where you would like to obtain such access, please contact us in writing on the contact details set out at the bottom of this privacy policy.</p>

            <h2>Complaint procedure</h2>

            <p>If you have a complaint concerning the manner in which we maintain the privacy of your Personal Information, please contact us as on the contact details set out at the bottom of this policy. All complaints will be considered by Chriss Quartz and we may seek further information from you to clarify your concerns. If we agree that your complaint is well founded, we will, in consultation with you, take appropriate steps to rectify the problem. If you remain dissatisfied with the outcome, you may refer the matter to the Office of the Australian Information Commissioner.</p>

            <h2>Overseas transfer</h2>

            <p>Your Personal Information may be transferred overseas or stored overseas for a variety of reasons. It is not possible to identify each and every country to which your Personal Information may be sent. If your Personal Information is sent to a recipient in a country with data protection laws which are at least substantially similar to the Australian Privacy Principles, and where there are mechanisms available to you to enforce protection of your Personal Information under that overseas law, we will not be liable for a breach of the Australian Privacy Principles if your Personal Information is mishandled in that jurisdiction. If your Personal Information is transferred to a jurisdiction which does not have data protection laws as comprehensive as Australia's, we will take reasonable steps to secure a contractual commitment from the recipient to handle your information in accordance with the Australian Privacy Principles.</p>

            <h2>GDPR</h2>

            <p>In some circumstances, the European Union General Data Protection Regulation (GDPR) provides additional protection to individuals located in Europe. The fact that you may be located in Europe does not, however, on its own entitle you to protection under the GDPR. Our website does not specifically target customers located in the European Union and we do not monitor the behaviour of individuals in the European Union, and accordingly the GDPR does not apply.</p>

            <div class="contact">
                <h2>How to contact us about privacy</h2>
                <p>If you have any queries, or if you seek access to your Personal Information, or if you have a complaint about our privacy practices, you can contact us through: <a href="mailto:support@zentrahosting.xyz">support@zentrahosting.xyz</a>.</p>
            </div>

        </div>
    );
}

export default PrivacyPolicy;
