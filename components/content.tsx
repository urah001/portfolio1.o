"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
  ExternalLinkIcon,
  Truck,
} from "lucide-react";

export default function Portfolio() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            URAH
          </h1>
          <nav className="flex items-center space-x-4">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              className="ml-4"
              icon={
                darkMode ? (
                  <MoonIcon className="h-4 w-4" />
                ) : (
                  <SunIcon className="h-4 w-4" />
                )
              }
            />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Full Stack Web Developer
            </h2>
            <p className="text-xl mb-8">
              I am a highly competent software developer with a proven track
              record in designing websites, networking and creating project for
              self development over the past learning years . I have strong
              technical skills as well as excellent interpersonal skills,
              enabling me to interact with a wide range of clients. I am eager
              to be challenged in order to grow and further improve my IT
              skills. My greatest passion is in life is using my technical
              know-how to benefit other people and organisations.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/urah001">
                <Button
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-blue-100"
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <Button
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-100"
              >
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "JavaScript", icon: "🌐" },
              { name: "React", icon: "⚛️" },
              { name: "Node.js", icon: "🚀" },
              { name: "Python", icon: "🐍" },
              { name: "SQL", icon: "🗃️" },
              { name: "GraphQL", icon: "📊" },
              { name: "AWS", icon: "☁️" },
              { name: "Docker", icon: "🐳" },
            ].map((skill) => (
              <Card
                key={skill.name}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="pt-6">
                  <p className="text-4xl mb-2">{skill.icon}</p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {skill.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Social media Platform",
                description:
                  "A full-stack social media app built with React and Node.js, featuring post and reaction .",
                image: "@/public/connect.svg?height=200&width=400",
                link: "https://urah-portfolio.vercel.app",
              },
              {
                title: "Task Management App",
                description:
                  "A productivity app created using React Native and Firebase, with features like task prioritization, team collaboration, and push notifications.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Data Visualization Dashboard",
                description:
                  "An interactive dashboard built with D3.js and Vue.js, showcasing complex data sets with real-time updates and customizable views.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "AI Chatbot",
                description:
                  "A machine learning powered chatbot using Python and TensorFlow, capable of natural language processing and integration with various platforms.",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <a href="https://studenthub.vercel.app">View Project</a>
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Get in Touch
          </h2>
          <Card className="max-w-lg mx-auto">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                I'm always open to new opportunities and collaborations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-900 py-8 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; 2023 Jane Doe. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
            >
              <MailIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
