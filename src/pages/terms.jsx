import { useEffect } from 'react';
import ScrollToTop from '../components/ScrollToTop';

function Terms() {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div>
            <ScrollToTop />
            <head>
                <title>Zentra Hosting | Terms of service</title>
            </head>
            <div className="min-h-screen bg-slate-900 text-white p-6">
                <h1 className="text-3xl font-bold mb-4">TERMS AND CONDITIONS</h1>
                <p className="mb-2">Last Updated: August 08, 2025</p>
                <p className="mb-4">
                    Our Terms and Conditions (hereinafter, "T&C") constitute a legally binding agreement between
                    <a href="https://zentrahosting.xyz" className="text-blue-400"> Zentra Hosting</a>
                    (hereinafter, "Us", "We" or "Our") and you (hereinafter, "User ," "Users," "your," or "yours").
                    Your use of our App shall be governed by the following T&C.
                </p>
                <p className="mb-4">
                    If you are a child under 13 years old (or such greater age required in your country or territory for you to be authorized to register for and use our App without parental approval),
                    you are allowed to use our App only after your parent or guardian has read and accepted these T&C for you.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Registration</h2>
                <p className="mb-4">
                    You agree to provide accurate information regarding your phone number, email address, and any other additional information while registering for our App.
                    Should any of your details change, you shall immediately update your data and notify us via email at
                    <a href="mailto:contact@zentrahosting.xyz" className="text-blue-400"> contact@zentrahosting.xyz</a>.
                    You agree to receive for security reasons text messages and phone calls (from us or our third-party providers) with codes to register for our App.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Age</h2>
                <p className="mb-4">
                    You must be at least 13 years old to register for and use our App (or such greater age required in your country or territory for you to be authorized to register for and use our App without parental approval)
                    and having read these T&C with your parent or guardian.
                    In any case, we reserve the right to suspend and cancel your account unilaterally and without notice if we have a reasonable doubt that you do not have the legal minimum age to use our App.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Devices and Software</h2>
                <p className="mb-4">
                    You may need to provide certain devices, software, and data connections to use our App, which we do not supply.
                    In order to use our App, you consent to manually or automatically download and install updates to our App.
                    You also consent to our sending you notifications via our App from time to time, as necessary to keep our App functional for you.
                </p>
                <p className="mb-4">
                    You may purchase products from our App and/or subscribe to a subscription plan.
                    Our App may offer subscription plans, in-App purchases, and promotions.
                    The subscription plan types, names, and prices may change occasionally.
                    For all subscription plans, payment occurs on a pre-pay basis.
                    The amount you are to pay and the length of your subscription will depend on the subscription plan you choose.
                </p>
                <p className="mb-4">
                    We reserve the sole right to change pricing without notice or cause, and you are required to keep checking the link above.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Use</h2>
                <p className="mb-4">
                    You agree to only use our App under the following conditions:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>You may only use our App for your own personal, non-commercial purposes.</li>
                    <li>If you are a company or another business entity, you are requested to state so, even if you plan to use our App for non-commercial purposes.</li>
                    <li>You may upload data, text, information, screen names, graphics, photos, profiles, audio and video clips, links (hereinafter, the "Content") on our App.</li>
                    <li>You may only use our App in good faith, and in compliance with applicable laws.</li>
                </ul>
                <p className="mb-4">
                    You agree not to, and you shall not permit others to:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>License, sell, rent, lease, transfer, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit our App or make our App available to any third parties.</li>
                    <li>Copy or use our App for any purpose other than your own personal, non-commercial purposes.</li>
                    <li>Copy or use our App to facilitate any criminal activity, including but not limited to hacking.</li>
                    <li>Modify, make derivative works of, disassemble, decrypt, translate, reverse compile or reverse engineer any part of our App.</li>
                    <li>Abuse, harass, threaten, impersonate or intimidate other Users of our App.</li>
                    <li>Post nude, partially nude, sexually suggestive photos, or otherwise any other illegal and/or discriminatory Content on our App.</li>
                    <li>Use our App for any illegal or unauthorized purpose.</li>
                    <li>International Users agree to comply with all local laws regarding online conduct and acceptable content.</li>
                    <li>Violate any laws in your and our jurisdiction (including but not limited to copyright laws) in the use of our App.</li>
                    <li>Transmit any worms or viruses or otherwise any code of a destructive nature on our App.</li>
                </ul>
                <p className="mb-4">
                    You are solely responsible for any activity that occurs under your account and for keeping your password secure.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Privacy</h2>
                <p className="mb-4">
                    All material and services available and/or provided by our App, its affiliates, employees, licensors, or other commercial partners including, but not limited to: our logo, visual designs or other materials and components are the property of our App or other parties that have licensed their material or provided services to us.
                    Such material and services are duly protected by registered and unregistered copyright, trademarks, trade secrets, design, and other intellectual property laws as may be applicable in your country, and may not be duplicated under any circumstances, or used other than for your personal non-commercial use, or otherwise than described in these Terms and Conditions or our Privacy Policy.
                </p>
                <p className="mb-4">
                    We care about data privacy and security. Please review our Privacy Policy at
                    <a href="https://zentrahosting.xyz/privacy" className="text-blue-400"> https://zentrahosting.xyz/privacy</a>.
                </p>
                <p className="mb-4">
                    By using our App, you agree to be bound by our Privacy Policy, which is incorporated into these T&C.
                    Please be advised the Site is hosted in Australia. If you access the Site from the USA, Canada, EU, Asia, or any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Australia,
                    then through your continued use of the Site, you are transferring your data to Australia, and you expressly consent to have your data transferred to and processed in Australia.
                </p>
                <p className="mb-4">
                    If you do not agree with such transfer of data, you should immediately refrain from using our App and notify us in order to delete your data.
                    Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children.
                    We only collect information from children after obtaining prior consent from their parents or guardians and reserve the right to suspend or delete your account if we suspect such consent is not authentic.
                    Therefore, in accordance with the U.S. Children’s Online Privacy Protection Act and EU GDPR Reg. 679/2016 recitals 38 and 58, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information from the App as quickly as is reasonably practical.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
                <p className="mb-4">
                    WE WILL NOT BE LIABLE TO YOU FOR ANY LOST PROFITS OR CONSEQUENTIAL, SPECIAL, PUNITIVE, INDIRECT, OR INCIDENTAL DAMAGES RELATING TO, ARISING OUT OF, OR IN ANY WAY IN CONNECTION WITH OUR TERMS, US, OR OUR APP, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    OUR AGGREGATE LIABILITY RELATING TO, ARISING OUT OF, OR IN ANY WAY IN CONNECTION WITH OUR TERMS, US, OR OUR SERVICES WILL NOT EXCEED THE GREATER OF ONE HUNDRED DOLLARS ($100) AND 100% OF THE PRICE PAID, IF APPLICABLE.
                    THE FOREGOING DISCLAIMER OF CERTAIN DAMAGES AND LIMITATION OF LIABILITY WILL APPLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
                    THE LAWS OF SOME STATES OR JURISDICTIONS MAY NOT ALLOW THE DISCRETIONARY EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OR ALL OF THE EXCLUSIONS AND LIMITATIONS SET FORTH ABOVE MAY NOT APPLY TO YOU.
                    NOTWITHSTANDING ANYTHING TO THE CONTRARY IN OUR TERMS, IN SUCH CASES, THE LIABILITY OF
                    <a href="https://ZENTRAHOSTING.XYZ" className="text-blue-400"> ZENTRA HOSTING</a>
                    WILL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Indemnification</h2>
                <p className="mb-4">
                    You agree to defend, indemnify, and hold harmless
                    <a href="https://zentrahosting.xyz" className="text-blue-400"> Zentra Hosting</a>
                    from and against all liabilities, damages, losses, and expenses of any kind (including reasonable legal fees and costs) relating to, arising out of, or in any way in connection with any of the following:
                    (a) your access to or use of our Services, including information provided in connection therewith;
                    (b) your breach or alleged breach of our Terms; or
                    (c) any misrepresentation made by you.
                    You will cooperate as fully as required by us in the defense or settlement of any claim.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Dispute Resolution</h2>
                <p className="mb-4">
                    In compliance with the EU-US Privacy Shield Principles and the Swiss-US Privacy Shield Principles, we commit to resolve complaints about your privacy and our collection or use of your personal information.
                    European Union, United Kingdom, or Swiss individuals with inquiries or complaints regarding these terms of service should contact us by email at
                    <a href="mailto:contact@zentrahosting.xyz" className="text-blue-400"> contact@zentrahosting.xyz</a>
                    or by any other available method in the CONTACT US section.
                </p>
                <p className="mb-4">
                    <a href="https://zentrahosting.xyz" className="text-blue-400">Zentra Hosting</a>
                    has further committed to refer unresolved privacy complaints under the EU-US Privacy Shield Principles and the Swiss-US Privacy Shield Principles to an independent dispute resolution mechanism,
                    the BBB EU PRIVACY SHIELD, operated by BBB National Programs.
                    If you do not receive timely acknowledgment of your complaint, or if your complaint is not satisfactorily addressed, please visit
                    <a href="https://bbbprograms.org/privacy-shield-complaints/" className="text-blue-400"> https://bbbprograms.org/privacy-shield-complaints/</a>
                    for more information and to file a complaint.
                </p>
                <p className="mb-4">
                    This service is provided at no cost to you. Please do not submit GDPR complaints to BBB EU Privacy Shield.
                    If your EU-US Privacy Shield complaint cannot be resolved through these described channels, under certain conditions, you may invoke binding arbitration for some residual claims not resolved by other redress mechanisms.
                    To learn more, please view the Privacy Shield Annex 1 at
                    <a href="https://www.privacyshield.gov/article?id=ANNEX-I-introduction" className="text-blue-400"> https://www.privacyshield.gov/article?id=ANNEX-I-introduction</a>.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Disclaimer: Warranty</h2>
                <p className="mb-4">
                    To the extent permitted under applicable laws, you acknowledge that we provide the App "as-is" without any warranty of any kind, express or implied, and to the maximum extent permitted by applicable law.
                    We disclaim all warranties, whether express, implied, or statutory, including but not limited to, warranties of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, and non-infringement.
                    We do not guarantee any specific results from the use of our App.
                    We make no warranty that the App shall be uninterrupted, free of viruses, or other harmful code, timely, secure, or error or bug-free.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Amendments</h2>
                <p className="mb-4">
                    We reserve the sole right to amend, repeal, modify, replace, terminate or make changes to this T&C, and the App without notice, from time to time.
                    If we make material changes to this T&C, or the App, we shall – if possible - notify you by sending you an e-mail at your primary email address or in any other way convenient for us, as mentioned in your account details.
                </p>
                <p className="mb-4">
                    Any changes to this T&C, or App, shall be effective immediately for new users of our App; otherwise, these changes shall be effective upon the earliest of thirty (30) calendar days following our dispatch of an e-mail notice to you;
                    if you do not want to agree to such changes, you shall refrain from using the App and delete your account unless otherwise provided in the aforementioned notice.
                </p>
                <p className="mb-4">
                    You are responsible at all times for updating your Account to provide us with your most current e-mail address.
                    If the last e-mail address that you have provided to us is not valid, or for any reason is not capable of delivering the notice described above, our dispatch of the e-mail containing such notice shall nonetheless constitute effective notice of the changes.
                </p>
                <p className="mb-4">
                    Continued use of the App following notice of such changes shall indicate your acknowledgment of, and agreement to be bound by, such changes.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Severability and Disclaimers</h2>
                <p className="mb-4">
                    Neither the rights nor the obligations arising under this T&C are assignable by you, and any such attempted assignment or transfer shall be void and without effect.
                    We reserve the right to freely assign this T&C.
                    The United Nations Convention on Contracts for the International Sale of Goods shall not apply to this T&C.
                    Any notice to you may be provided by email to the address you have registered with us.
                    We shall have no responsibility to provide maintenance or support services with respect to the App.
                </p>
                <p className="mb-4">
                    If any provision of this T&C is unenforceable, such provision shall be interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions shall continue in full force and effect.
                </p>
                <p className="mb-4">
                    All waivers by us shall be effective only if in writing, there included this T&C.
                    Any waiver or failure by
                    <a href="https://zentrahosting.xyz" className="text-blue-400"> Zentra Hosting</a>
                    to enforce any provision of this T&C on one occasion shall not be deemed a waiver of any other provision or of such provision on any other occasion.
                </p>
                <p className="mb-4">
                    You acknowledge that the App contains valuable trade secrets, trademarks, copyrights, proprietary information, and other intellectual properties of
                    <a href="https://zentrahosting.xyz" className="text-blue-400"> Zentra Hosting</a>,
                    that any actual or threatened breach of any section of this T&C that may constitute irreparable harm to
                    <a href="https://zentrahosting.xyz" className="text-blue-400"> Zentra Hosting</a>
                    shall be liable to any and every damages, including but not limited to, incidental damages, consequential damages, nominal damages, liquidated damages, punitive damages, monetary or any special kind of damages permitted by applicable laws, as an appropriate remedy for such breach.
                    This T&C and the Terms constitute the final, complete, and exclusive agreement between the parties regarding the App and supersede all prior or contemporaneous agreements, understandings, and communication, whether written or oral.
                </p>
                <p className="mb-4">
                    If any provision of these T&C is unenforceable, such provision shall be interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions shall continue in full force and effect.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">CONTACT US</h2>
                <p className="mb-4">
                    For any questions or queries regarding these Terms and Conditions, please feel free to contact us:
                    <a href="mailto:contact@zentrahosting.xyz" className="text-blue-400"></a>
                </p>
            </div>
        </div>
    )
}

export default Terms;