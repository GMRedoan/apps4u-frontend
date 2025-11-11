import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative bg-black text-gray-300 py-10 px-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700/20 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700/20 blur-[150px] rounded-full"></div>

            <div className="max-w-7xl mx-auto backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl">
                <div className="grid grid-cols-2 md:flex justify-center gap-10 mb-12 text-xl">
                    {[
                        { icon: <FaFacebook />, label: "Facebook" },
                        { icon: <FaTwitter />, label: "Twitter" },
                        { icon: <FaYoutube />, label: "Youtube" },
                        { icon: <FaInstagram />, label: "Instagram" },
                    ].map((item, index) => (
                        <a  key={index}
                            className="flex items-center gap-2 hover:text-white transition duration-300 cursor-pointer"
                        >
                                  {item.icon}
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>
                <div className="border-t border-white/10 my-10"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
                    {[
                        {
                            title: "ABOUT US",
                            items: ["Pricing", "Contact", "FAQ", "Blog"],
                        },
                        {
                            title: "SUPPORT",
                            items: ["Help Center", "Terms", "Privacy", "Security"],
                        },
                        {
                            title: "COMMUNITY",
                            items: ["Forum", "Events", "Partners", "Affiliates", "Career"],
                        },
                        {
                            title: "PRESS",
                            items: [
                                "Investors",
                                "Terms of Use",
                                "Privacy Policy",
                                "Cookie Policy",
                                "Legal",
                            ],
                        },
                    ].map((col, i) => (
                        <div key={i}>
                            <h3 className="text-gray-400 text-xs mb-3 tracking-widest font-semibold">
                                {col.title}
                            </h3>

                            <ul className="space-y-2">
                                {col.items.map((item, idx) => (
                                    <li key={idx}>
                                        <a className="hover:text-white transition duration-300 cursor-pointer">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
