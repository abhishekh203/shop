  import React from "react";
  import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Importing icons for lists
  import Layout from "../components/layout/Layout";  // Import Layout component
  import Nepal from "./nepal";

  const SpotifyNepal = () => {
      return (
          <Layout>
              <div className="min-h-screen bg-gradient-to-b from-black via-green-900 to-black p-8 text-white relative">
                  {/* Adding a background image for a more immersive look */}


                  {/* Content Section */}
                  <div className="relative z-10">

                      {/* Hero Section */}
                      <section className="text-center p-10 fade-in">
                          <h1 className="text-5xl font-bold text-green-500 mb-6">Spotify Nepal</h1>
                          <p className="text-xl text-gray-300 text-justify w-full leading-relaxed">
                              Discover unlimited music streaming with Spotify Premium in Nepal. With our affordable Premium subscription, you can listen to your favorite songs, albums, and podcasts ad-free and offline on multiple devices. Enjoy high-quality audio with no interruptions and personalized playlists curated just for you.
                          </p>
                          <ul className="text-gray-400 list-disc list-inside text-left mt-8 max-w-3xl mx-auto">
                          <li className="mb-1 flex items-center">
                                  <CheckCircleOutlineIcon className="text-green-500 mr-2" />
                                  Available with a personal email for easy access and secure login.
                                  </li>
                            
                              <li className="mb-1 flex items-center">
                                  <CheckCircleOutlineIcon className="text-green-500 mr-2" />
                                  Unlimited skips and ad-free listening.
                              </li>
                              <li className="mb-1 flex items-center">
                                  <CheckCircleOutlineIcon className="text-green-500 mr-2" />
                                  Download your favorite tracks and listen offline.
                              </li>
                              <li className="mb-1 flex items-center">
                                  <CheckCircleOutlineIcon className="text-green-500 mr-2" />
                                  High-quality audio for the best listening experience.
                              </li>
                              <li className="mb-1 flex items-center">
                                  <CheckCircleOutlineIcon className="text-green-500 mr-2" />
                                  Create and share personalized playlists.
                              </li>
                              <li className="mb-1 flex items-center">
                                  <CheckCircleOutlineIcon className="text-green-500 mr-2" />
                                  Accessible on any device: mobile, desktop, or tablet.
                              </li>
                              <li className="mb-1 flex items-center">
                                  <CheckCircleOutlineIcon className="text-green-500 mr-2" />
                                  No VPN required for Spotify in Nepal.
                              </li>
                          </ul>
                      </section>

                      {/* Accordion Sections */}
                      <div className="my-8 max-w-4xl mx-auto">
                          {/* Description Section */}
                          <Accordion>
                              <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  className="bg-gray-800 text-white hover:bg-gray-700 transition duration-300"
                              >
                                  <h2 className="text-lg font-semibold">Description</h2>
                              </AccordionSummary>
                              <AccordionDetails className="bg-gray-900 shadow-md border-t border-gray-700 transition-all">
                                  <p className="text-gray-300">
                                      With a Spotify Premium Nepal subscription, you can enjoy seamless music streaming without ads, download your favorite songs to listen offline, and get access to exclusive content. It works perfectly in Nepal without the need for a VPN.
                                  </p>
                                  <ul className="text-gray-400 list-disc list-inside mt-3">
                                      <p className="mt-3 text-white"><strong>Subscription Pricing:</strong></p>
                                    
                                      <li>3 Months Subscription: Rs. 599</li>
                                      <li>6 Months Subscription: Rs. 999</li>
                                      <li>Yearly Subscription: Rs. 1699</li>
                                  </ul>
                              </AccordionDetails>
                          </Accordion>

                          {/* Subscription Benefits Section */}
                          <Accordion>
                              <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  className="bg-gray-800 text-white hover:bg-gray-700 transition duration-300"
                              >
                                  <h2 className="text-lg font-semibold">Subscription Benefits</h2>
                              </AccordionSummary>
                              <AccordionDetails className="bg-gray-900 shadow-md border-t border-gray-700 transition-all">
                                  <ul className="text-gray-400 list-disc list-inside">
                                      <li>Ad-free music streaming.</li>
                                      <li>Unlimited skips and high-quality audio.</li>
                                      <li>Download music for offline listening.</li>
                                      <li>Access exclusive content, podcasts, and playlists.</li>
                                      <li>No VPN required for streaming in Nepal.</li>
                                      <li>Personalized playlists based on your listening habits.</li>
                                      <li>Available with a personal email for easy access and secure login.</li>
                                  </ul>
                              </AccordionDetails>
                          </Accordion>

                          {/* How to Use Section */}
                          <Accordion>
                              <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  className="bg-gray-800 text-white hover:bg-gray-700 transition duration-300"
                              >
                                  <h2 className="text-lg font-semibold">How to Use</h2>
                              </AccordionSummary>
                              <AccordionDetails className="bg-gray-900 shadow-md border-t border-gray-700 transition-all">
                                  <p className="text-gray-300">
  Once you subscribe to Spotify Premium, we will share an invite link through which you can join. If the invite is not accepted, we are happy to guide you through the process. You can sign in on the Spotify app available on mobile, desktop, or tablet. Start streaming your favorite songs instantly, or download tracks for offline listening."
                                  </p>
                                  <ul className="text-gray-400 list-disc list-inside mt-2">
                                      <li>Install the Spotify app on your preferred device.</li>
                                      <li>Login using the provided credentials and start streaming.</li>
                                      <li>Contact support for any issues or account assistance.</li>
                                  </ul>
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
                                      <li>Do not share your account credentials with others.</li>
                                      <li>Do not change the account email or password unless you haven't subscribe in your email.</li>
                                      <li>Contact support for account-related issues.</li>
                                      <li>Keep your account secure by not adding unnecessary information to the profile settings.</li>
                                  </ul>
                              </AccordionDetails>
                          </Accordion>
                      </div>
                      <Nepal/>

                      {/* Footer Section */}
                      <footer className="text-center mt-16 text-gray-500">
                          <p>&copy; 2024 Spotify Nepal. All Rights Reserved.</p>
                      </footer>
                  </div>
              </div>
          </Layout>
      );
  };

  export default SpotifyNepal;
