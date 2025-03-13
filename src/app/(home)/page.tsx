
import { Users, Heart, Award, Clock, Star, Zap, Coffee} from "lucide-react"
import Link from "next/link"


export default function Home() {
  return (
    <div className="w-full bg-background">
      {/* Hero Section with Gradient Background */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-block p-2 bg-white/10 backdrop-blur-sm rounded-lg mb-2">
              <Users className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Company</h1>
            <p className="text-xl text-white/90 max-w-[700px]">
              Were on a mission to transform how businesses operate through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <Clock className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2015, our company began with a simple idea: to make technology accessible to everyone. What
                started as a small team of three passionate individuals has grown into a thriving company with over 50
                employees across the globe.
              </p>
              <p className="text-muted-foreground">
                Through years of innovation and dedication, weve helped hundreds of businesses transform their
                operations and achieve their goals. Our journey has been defined by continuous learning and a commitment
                to excellence.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Heart className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Mission</h2>
              <p className="text-muted-foreground">
                We believe in creating technology that empowers people to do their best work. Our mission is to develop
                intuitive, powerful solutions that solve real-world problems and make a positive impact on businesses
                and communities.
              </p>
              <p className="text-muted-foreground">
                Every product we build is guided by our commitment to quality, usability, and innovation. Were not just
                building software; were creating tools that help people achieve their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Colorful Cards */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-amber-100 text-amber-600 rounded-lg">
              <Star className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Core Values</h2>
            <p className="max-w-[700px] text-muted-foreground">
              These principles guide everything we do and every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col p-6 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-lg shadow-sm">
              <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="mt-2 text-white/90">
                We strive for excellence in everything we do, from code quality to customer service.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-lg shadow-sm">
              <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="mt-2 text-white/90">
                We believe great ideas come from diverse teams working together toward a common goal.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-lg shadow-sm">
              <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="mt-2 text-white/90">
                We constantly push boundaries and explore new ideas to create better solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-violet-100 text-violet-600 rounded-lg">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Leadership Team</h2>
            <p className="max-w-[700px] text-muted-foreground">
              Meet the talented individuals who guide our companys vision and strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-slate-200">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
                JD
              </div>
              <h3 className="text-xl font-bold">Jane Doe</h3>
              <p className="text-primary font-medium">Chief Executive Officer</p>
              <p className="text-muted-foreground mt-2">
                With over 15 years of experience in technology leadership, Jane drives our companys vision and
                strategy.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-slate-200">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
                JS
              </div>
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="text-primary font-medium">Chief Technology Officer</p>
              <p className="text-muted-foreground mt-2">
                John leads our engineering team and ensures were always at the cutting edge of technology.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-slate-200">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
                AR
              </div>
              <h3 className="text-xl font-bold">Alice Rodriguez</h3>
              <p className="text-primary font-medium">Chief Product Officer</p>
              <p className="text-muted-foreground mt-2">
                Alice ensures our products deliver exceptional value and experiences to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Colorful Background */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold mb-2">8+</div>
              <p className="text-white/80">Years in Business</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-white/80">Team Members</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold mb-2">12</div>
              <p className="text-white/80">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-2 bg-amber-100 text-amber-600 rounded-lg">
              <Coffee className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Lets Work Together</h2>
            <p className="max-w-[700px] text-muted-foreground">
              Were always looking for new challenges and opportunities to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link href="/" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Contact Us
              </Link>
              <Link href="/" >View Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

