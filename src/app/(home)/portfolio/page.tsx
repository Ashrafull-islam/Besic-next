
import { Bookmark, Calendar, Clock, Heart, MessageCircle, Search, Tag } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full bg-base-200">
      {/* Hero Section with Gradient Background */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-block p-2 bg-white/10 backdrop-blur-sm rounded-lg mb-2">
              {/* <BookOpen className="h-8 w-8" /> */}
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Blog</h1>
            <p className="text-xl text-white/90 max-w-[700px]">
              Insights, stories, and ideas from our team to help you thrive in todays digital world.
            </p>
            <div className="flex w-full max-w-md items-center space-x-2 pt-4">
              <input
                type="text"
                placeholder="Search articles..."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30"
              />
              <button className="shrink-0">
                <Search className="h-4 w-4 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-amber-100 text-amber-600 rounded-lg">
              <Tag className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Featured Post</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-violet-50 to-purple-100 border border-purple-200 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary">Technology</span>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> March 15, 2023
                  </span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-purple-700 transition-colors duration-200">
                  The Future of AI in Everyday Business Operations
                </h3>
                <p className="text-muted-foreground">
                  Artificial intelligence is no longer just a buzzword or a technology of the future. Its here now,
                  transforming how businesses operate across all industries. In this article, we explore how AI is being
                  implemented in everyday business operations and what this means for the future of work.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold">
                      JD
                    </div>
                    <span className="font-medium">Jane Doe</span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> 8 min read
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" /> 24 comments
                    </span>
                  </div>
                </div>
                <button className="w-full sm:w-auto mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-8 md:py-12 bg-base-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            <button className="rounded-full border-slate-200 hover:bg-slate-100 hover:text-slate-900">
              All Posts
            </button>
            <button
              className="rounded-full border-pink-200 bg-pink-50 text-pink-600 hover:bg-pink-100 hover:text-pink-700"
            >
              Technology
            </button>
            <button
              className="rounded-full border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
            >
              Business
            </button>
            <button
              className="rounded-full border-green-200 bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700"
            >
              Design
            </button>
            <button
              className="rounded-full border-amber-200 bg-amber-50 text-amber-600 hover:bg-amber-100 hover:text-amber-700"
            >
              Marketing
            </button>
            <button
              className="rounded-full border-purple-200 bg-purple-50 text-purple-600 hover:bg-purple-100 hover:text-purple-700"
            >
              Development
            </button>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-emerald-100 text-emerald-600 rounded-lg">
              <Clock className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Recent Articles</h2>
            <p className="max-w-[700px] text-muted-foreground">
              Explore our latest thoughts, ideas, and insights on various topics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Post 1 */}
            <div className="group flex flex-col h-full p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-primary hover:shadow-md transition-all duration-200">
              <div className="h-2 w-16 rounded-full bg-blue-500 mb-4"></div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge badge-primary">Business</span>
                <span className="text-xs text-muted-foreground">Mar 10, 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-200">
                10 Strategies to Grow Your Business in 2023
              </h3>
              <p className="text-muted-foreground flex-grow">
                Discover proven strategies that can help your business thrive in todays competitive landscape.
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                    JS
                  </div>
                  <span className="text-sm">John Smith</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <button className="hover:text-pink-500 transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="hover:text-blue-500 transition-colors">
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            {/* Repeat similar layout as Post 1 */}
            <div className="group flex flex-col h-full p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-primary hover:shadow-md transition-all duration-200">
              <div className="h-2 w-16 rounded-full bg-green-500 mb-4"></div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge badge-success">Marketing</span>
                <span className="text-xs text-muted-foreground">Mar 5, 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-200">
                How to Maximize ROI in Digital Marketing
              </h3>
              <p className="text-muted-foreground flex-grow">
                Learn the best practices for maximizing return on investment in your digital marketing efforts.
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold">
                    AK
                  </div>
                  <span className="text-sm">Alice King</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <button className="hover:text-pink-500 transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="hover:text-blue-500 transition-colors">
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
