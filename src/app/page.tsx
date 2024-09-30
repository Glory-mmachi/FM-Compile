import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <main className="md:w-3/4 mx-auto text-black">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 w-full">
          {/* Left section */}
          <div className="col-span-1 p-4 order-2 md:order-1 mt-4 md:mt-0 h-full">
            <div className="grid grid-rows-2 gap-4">
              {/* Content Block 1 */}
              <div className="bg-[#FAEEE2] md:col-span-3 p-8 rounded-2xl">
                <h1 className="text-3xl font-bold mb-4">
                  Create and schedule content{" "}
                  <span className="text-purple-400">quicker</span>
                </h1>
                <Image
                  src="/illustration-create-post.webp"
                  width={200}
                  height={200}
                  alt="Create post illustration"
                />
              </div>

              {/* Content Block 2 */}
              <div className="bg-[#FFCC69] md:col-span-3 p-8 rounded-2xl">
                <h1 className="text-3xl font-bold mb-4">
                  Use AI to create content
                </h1>
                <Image
                  src="/illustration-ai-content.webp"
                  width={200}
                  height={200}
                  alt="AI content creation"
                />
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="col-span-2 p-4 order-1 md:order-2">
            <div className="grid grid-rows-3 gap-4 h-full">
              {/* Top Section */}
              <div className="row-span-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                  {/* Left (3/4/5 items) */}
                  <div className="md:col-span-2">
                    <div className="grid grid-rows-2 gap-4 h-full">
                      {/* Block 3 */}
                      <div className="row-span-1 bg-[#7651DC] text-white rounded-2xl flex flex-col items-center justify-center p-8">
                        <h1 className="text-3xl font-bold pb-4 text-center">
                          Social media{" "}
                          <span className="text-[#FDCB70]">10x</span> faster
                          with AI
                        </h1>
                        <Image
                          src="/illustration-five-stars.webp"
                          width={150}
                          height={150}
                          alt="5-star reviews"
                        />
                        <p className="text-sm mt-1">Over 4000 5-star reviews</p>
                      </div>

                      {/* Block 4 & 5 */}
                      <div className="row-span-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                          {/* Block 4 */}
                          <div className="bg-white rounded-2xl p-5">
                            <Image
                              src="/illustration-multiple-platforms.webp"
                              width={700}
                              height={900}
                              alt="Manage multiple platforms"
                            />
                            <h1 className="text-3xl font-bold">
                              Manage multiple accounts and platforms
                            </h1>
                          </div>

                          {/* Block 5 */}
                          <div className="bg-[#FFCC69] rounded-2xl p-5">
                            <h1 className="text-3xl font-bold">
                              Maintain a consistent schedule
                            </h1>
                            <div className="mt-4">
                              <Image
                                src="/illustration-consistent-schedule.webp"
                                width={300}
                                height={300}
                                alt="Consistent schedule"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Block 6 - "Schedule to social media" */}
                  <div className="md:col-span-1 bg-[#DCD1FC] rounded-2xl p-6">
                    <h1 className="text-2xl font-bold mb-4">
                      Schedule to social media
                    </h1>
                    <Image 
                      src="/illustration-schedule-posts.webp"
                      width={400}   // Increased width
                      height={400}  // Increased height
                      alt="Schedule posts"
                      className="object-contain" 
                    />
                    <p className="mt-4">
                      Optimize post timing to publish content at the perfect
                      time for your audience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="row-span-1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                  {/* Block 7 */}
                  <div className="bg-white md:order-1 order-2 rounded-2xl p-4">
                    <h1 className="text-[50px] font-bold">56%</h1>
                    <p className="text-[14px] my-3">Faster audience growth</p>
                    <Image
                      src="/illustration-audience-growth.webp"
                      width={150}
                      height={150}
                      alt="Audience growth illustration"
                    />
                  </div>

                  {/* Block 8 */}
                  <div className="md:col-span-2 bg-[#7651DC] md:order-2 order-1 rounded-2xl p-4">
                    <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4">
                      <Image
                        src="/illustration-grow-followers.webp"
                        width={250}
                        height={250}
                        alt="Grow followers illustration"
                      />
                      <h1 className="text-white text-3xl font-bold">
                        Grow followers with non-stop content
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
