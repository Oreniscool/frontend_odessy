"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import {
  Brain,
  Calendar,
  ClipboardList,
  Activity,
  Users,
  ArrowDown,
  MapPin,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, delay, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      className={`p-6 rounded-xl backdrop-blur-lg ${color} hover:shadow-2xl hover:shadow-[#e2ff81]/20 group relative overflow-hidden`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{
          x: ["0%", "200%"],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <div className="relative">
        <Icon className="h-10 w-10 mb-4 text-white transition-all duration-300 group-hover:text-[#e2ff81] group-hover:scale-110" />
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-[#e2ff81] group-hover:to-white transition-all duration-300">
          {title}
        </h3>
        <p className="text-white/80 transition-all duration-300 group-hover:text-white">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const StatisticCard = ({ value, label, trend, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
    >
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      <div className="text-white/80 text-sm">{label}</div>
      {trend && (
        <div
          className={`text-sm ${
            trend.includes("+") ? "text-green-400" : "text-red-400"
          }`}
        >
          {trend}
        </div>
      )}
    </motion.div>
  );
};

export default function Page() {
  const [showContent, setShowContent] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["rgb(4, 47, 46)", "rgb(6, 70, 69)", "rgb(8, 51, 68)", "rgb(10, 40, 70)"]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div className="min-h-screen" style={{ backgroundColor }}>
      {/* Initial Loading Animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-teal-950"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: 0 }}
        >
          <Brain className="h-20 w-20 text-[#e2ff81]" />
        </motion.div>
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/10 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-white" />
            <span className="text-xl font-semibold text-white">
              Apex Health
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm text-white/80 hover:text-white">
              How it works
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white">
              Why Apex Health?
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white">
              About
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white">
              Blog
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white">
              Careers
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-white hover:text-white/80">
              Log in
            </Link>
            <Button className="bg-[#e2ff81] text-black hover:bg-[#d4ff60]">
              Sign up for free
            </Button>
          </div>
        </div>
      </nav>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="text-white/60 flex flex-col items-center"
        >
          <ArrowDown className="h-6 w-6" />
          <span className="text-sm">Scroll to explore</span>
        </motion.div>
      </motion.div>

      {showContent && (
        <>
          {/* Hero Section */}
          <section className="container mx-auto px-4 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Your Journey To{" "}
                <span className="text-white">Better Health</span>
                <br />
                <span className="text-[#e2ff81]">Starts Here.</span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl mx-auto">
                Empower your wellness journey with our comprehensive health
                platform. Track goals, join classes, and connect with a
                supportive community.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#e2ff81] text-black hover:bg-[#d4ff60] text-lg px-8 py-6">
                  Start Your Journey
                </Button>
              </motion.div>
            </motion.div>
          </section>

          {/* Statistics Grid */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatisticCard
                value="10k+"
                label="Active Users"
                trend="+15% this month"
                delay={3.2}
              />
              <StatisticCard
                value="500+"
                label="Wellness Classes"
                trend="+28% this quarter"
                delay={3.4}
              />
              <StatisticCard
                value="50k+"
                label="Goals Achieved"
                trend="+8% this week"
                delay={3.6}
              />
              <StatisticCard
                value="24/7"
                label="Community Support"
                delay={3.8}
              />
            </div>
          </section>

          {/* Features Grid */}
          <section className="container mx-auto px-4 py-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-white text-center mb-16"
            >
              Empowering Your Wellness Journey
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              <FeatureCard
                icon={Activity}
                title="Health Tracking"
                description="Monitor your progress with interactive dashboards and personalized health goals"
                delay={1}
                color="bg-teal-800/40 hover:bg-teal-700/60"
              />
              <FeatureCard
                icon={Users}
                title="Community Support"
                description="Connect with like-minded individuals and share your wellness journey"
                delay={2}
                color="bg-blue-800/40 hover:bg-blue-700/60"
              />
              <FeatureCard
                icon={Calendar}
                title="Wellness Classes"
                description="Access a wide range of yoga, gym, and meditation programs"
                delay={3}
                color="bg-purple-800/40 hover:bg-purple-700/60"
              />
              <FeatureCard
                icon={Brain}
                title="AI Health Assistant"
                description="Receive personalized recommendations and AI-driven health assessments"
                delay={4}
                color="bg-pink-800/40 hover:bg-pink-700/60"
              />
              <FeatureCard
                icon={ClipboardList}
                title="Diet Planning"
                description="Create customized meal plans and track your nutritional intake"
                delay={5}
                color="bg-orange-800/40 hover:bg-orange-700/60"
              />
              <FeatureCard
                icon={MapPin}
                title="Local Wellness Map"
                description="Discover nearby yoga classes, gyms, and wellness events"
                delay={6}
                color="bg-green-800/40 hover:bg-green-700/60"
              />
            </div>
          </section>

          {/* Testimonials */}
          <section className="container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Transforming Lives, One Step at a Time
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Join thousands of individuals who have improved their health and
                well-being with our platform
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah J.",
                  role: "Yoga Enthusiast",
                  comment:
                    "The yoga classes and community support have been life-changing. I've never felt better!",
                },
                {
                  name: "Michael C.",
                  role: "Fitness Newbie",
                  comment:
                    "The personalized recommendations helped me start my fitness journey with confidence.",
                },
                {
                  name: "Emily W.",
                  role: "Busy Professional",
                  comment:
                    "The habit reminders and quick meditation sessions keep me balanced throughout the day.",
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 5.8 + i * 0.2 }}
                  className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-500" />
                    <div>
                      <div className="text-white font-medium">
                        {testimonial.name}
                      </div>
                      <div className="text-white/60 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80">"{testimonial.comment}"</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6.4 }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#e2ff81]/20 to-teal-500/20 backdrop-blur-xl p-12 text-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#e2ff81]/10 via-teal-500/10 to-blue-500/10"
              />
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Ready to Transform Your Health?
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Join our community of wellness enthusiasts and start your
                  journey to a healthier, happier you.
                </p>
                <div className="flex justify-center">
                  <Button className="bg-[#e2ff81] text-black hover:bg-[#d4ff60] text-lg px-8 py-6">
                    Join Our Community
                  </Button>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Success Stories Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="container mx-auto px-4 py-12 border-t border-white/10"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Success Stories
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                {
                  name: "Alex M.",
                  achievement: "Lost 30 lbs",
                  rating: "⭐⭐⭐⭐⭐",
                  comment:
                    "The diet planning feature was a game-changer for me!",
                },
                {
                  name: "Sophia L.",
                  achievement: "Reduced stress levels",
                  rating: "⭐⭐⭐⭐⭐",
                  comment: "Daily meditation sessions have transformed my life",
                },
                {
                  name: "David K.",
                  achievement: "Ran first marathon",
                  rating: "⭐⭐⭐⭐½",
                  comment:
                    "The training programs and community support were invaluable",
                },
                {
                  name: "Emma R.",
                  achievement: "Improved flexibility",
                  rating: "⭐⭐⭐⭐⭐",
                  comment:
                    "Yoga classes helped me achieve my flexibility goals",
                },
                {
                  name: "James T.",
                  achievement: "Better sleep quality",
                  rating: "⭐⭐⭐⭐⭐",
                  comment:
                    "Sleep tracking and bedtime routines made a huge difference",
                },
                {
                  name: "Olivia P.",
                  achievement: "Healthier eating habits",
                  rating: "⭐⭐⭐⭐½",
                  comment:
                    "Nutritional insights helped me make better food choices",
                },
              ].map((feedback, i) => (
                <motion.div
                  key={feedback.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="w-64 p-4 bg-white/5 backdrop-blur-lg rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-white/90 font-medium">
                    {feedback.name}
                  </div>
                  <div className="text-[#e2ff81] text-sm mb-2">
                    {feedback.achievement}
                  </div>
                  <div className="text-yellow-400 mb-2">{feedback.rating}</div>
                  <p className="text-white/80 text-sm">"{feedback.comment}"</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Revenue Section */}
          <section className="container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block bg-[#e2ff81] text-black px-4 py-1 rounded-full text-sm font-medium"
              ></motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-3xl font-semibold text-white"
              >
                Health is the greatest gift, contentment the greatest wealth,
                faithfulness the best relationship
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-white/80 max-w-3xl mx-auto"
              >
                Early to bed and early to rise, makes a man healthy, wealthy,
                and wise.
              </motion.p>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="container mx-auto px-4 py-12 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-bold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-white/60 hover:text-white">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/60 hover:text-white">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/60 hover:text-white">
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-white/60 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/60 hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/60 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-white/60 hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/60 hover:text-white">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/60 hover:text-white">
                      Help Center
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-white/60 hover:text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/60 hover:text-white">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/60 hover:text-white">
                      HIPAA
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center text-white/60">
              © {new Date().getFullYear()} Apex Health. All rights reserved.
            </div>
          </footer>
        </>
      )}
    </motion.div>
  );
}
