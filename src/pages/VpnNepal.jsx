import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Importing icons for lists
import Layout from "../components/layout/Layout"; // Import Layout component
import Nepal from "./nepal";

const VPNNepal = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black p-8 text-white relative">
                {/* Content Section */}
                <div className="relative z-10">

                    {/* Hero Section */}
                    <section className="text-center p-10 fade-in">
                        <h1 className="text-5xl font-bold text-green-500 mb-6">VPN Nepal</h1>
                         <p className="text-xl text-gray-300 text-justify w-full leading-relaxed">
                            Secure your online activities and access restricted content with a reliable VPN in Nepal. Explore top VPN options and choose the one that fits your needs!
                        </p>
                        <ul className="text-gray-400 list-disc list-inside text-left mt-8 max-w-3xl mx-auto">
                            <li className="mb-1 flex items-center">
                                <CheckCircleOutlineIcon className="text-green-500 mr-2" />
                                Enhanced Security for your online privacy.
                            </li>
                            <li className="mb-1 flex items-center">
                                <CheckCircleOutlineIcon className="text-green-500 mr-2" />
                                Access to Global Content without restrictions.
                            </li>
                            <li className="mb-1 flex items-center">
                                <CheckCircleOutlineIcon className="text-green-500 mr-2" />
                                No-logs Policy ensures your activities are private.
                            </li>
                            <li className="mb-1 flex items-center">
                                <CheckCircleOutlineIcon className="text-green-500 mr-2" />
                                Fast speeds for seamless streaming and browsing.
                            </li>
                            <li className="mb-1 flex items-center">
                                <CheckCircleOutlineIcon className="text-green-500 mr-2" />
                                User-friendly apps for all devices.
                            </li>
                        </ul>
                    </section>

                    {/* VPN Options Section */}
                    <div className="my-8 max-w-4xl mx-auto">
                        <h2 className="text-2xl font-semibold mb-4">Top VPN Options Provided in Nepal</h2>
                        <ul className="text-gray-400 list-disc list-inside">
                            <p className="mb-2">
                                <h3 className="text-lg font-bold">NordVPN</h3>
                                <p>NordVPN is renowned for its robust security features, fast connection speeds, and a vast network of servers worldwide. It's an excellent choice for both browsing and streaming.</p>
                          </p>
                            <p className="mb-2">
                                <h3 className="text-lg font-bold">Windscribe</h3>
                                <p>Windscribe offers a generous free plan along with a premium subscription. It combines solid encryption with useful features like ad blocking and firewall protection.</p>
                            </p>
                            <p className="mb-2">
                                <h3 className="text-lg font-bold">IPVanish</h3>
                                <p>IPVanish is known for its speed and a strict no-logs policy, making it a perfect choice for privacy-conscious users. It allows access to a wide range of content while ensuring your data remains private.</p>
                            </p>
                        </ul>
                    </div>

                    {/* Accordion Sections */}
                    <div className="my-8 max-w-4xl mx-auto">
                        {/* Description Section */}
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="bg-gray-800 text-white hover:bg-gray-700 transition duration-300"
                            >
                                <h2 className="text-lg font-semibold">What is a VPN?</h2>
                            </AccordionSummary>
                            <AccordionDetails className="bg-gray-900 shadow-md border-t border-gray-700 transition-all">
                                <p className="text-gray-300">
                                    A VPN (Virtual Private Network) creates a secure, encrypted connection between your device and the internet. It protects your online activities and allows you to access restricted content by masking your IP address.
                                </p>
                            </AccordionDetails>
                        </Accordion>

                        {/* Benefits Section */}
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="bg-gray-800 text-white hover:bg-gray-700 transition duration-300"
                            >
                                <h2 className="text-lg font-semibold">Benefits of Using a VPN in Nepal</h2>
                            </AccordionSummary>
                            <AccordionDetails className="bg-gray-900 shadow-md border-t border-gray-700 transition-all">
                                <ul className="text-gray-400 list-disc list-inside">
                                    <li>Enhanced Security: Protect your personal data from cyber threats.</li>
                                    <li>Access to Global Content: Bypass geographical restrictions on websites and streaming services.</li>
                                    <li>Anonymity: Surf the web without revealing your identity.</li>
                                    <li>Improved Online Privacy: Prevent tracking and monitoring of your online activities.</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>

                        {/* How to Use Section */}
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="bg-gray-800 text-white hover:bg-gray-700 transition duration-300"
                            >
                                <h2 className="text-lg font-semibold">How to Use a VPN</h2>
                            </AccordionSummary>
                            <AccordionDetails className="bg-gray-900 shadow-md border-t border-gray-700 transition-all">
                                <p className="text-gray-300">
                                    1. Choose a VPN provider (e.g., NordVPN, Windscribe, IPVanish).<br />
                                    2. Sign up for a plan that suits your needs.<br />
                                    3. Download and install the VPN application on your device.<br />
                                    4. Launch the application and connect to a server of your choice.<br />
                                    5. Start browsing securely and access restricted content.
                                </p>
                            </AccordionDetails>
                        </Accordion>

                        {/* Rules Section */}
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="bg-gray-800 text-white hover:bg-gray-700 transition duration-300"
                            >
                                <h2 className="text-lg font-semibold">Rules to Follow</h2>
                            </AccordionSummary>
                            <AccordionDetails className="bg-gray-900 shadow-md border-t border-gray-700 transition-all">
                                <ul className="text-gray-400 list-disc list-inside">
                                    <li>Always connect to the VPN before accessing sensitive information.</li>
                                    <li>Do not share your VPN credentials with others.</li>
                                    <li>Make sure to log out when not using the VPN on public networks.</li>
                                    <li>Keep the VPN application updated to the latest version.</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <Nepal />

                    {/* Footer Section */}
                    <footer className="text-center mt-16 text-gray-500">
                        <p>&copy; 2024 VPN Nepal. All Rights Reserved.</p>
                    </footer>
                </div>
            </div>
        </Layout>
    );
};

export default VPNNepal;
