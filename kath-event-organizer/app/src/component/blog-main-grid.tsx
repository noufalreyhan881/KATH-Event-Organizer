import React from 'react';
import Link from 'next/link';

const staticPosts = [
  {
    id: '1',
    title: 'Introducing KATH Event Organizer',
    image: '/images/fa8073312e772a6fbf1c0ec2c2f307b5.jpg',
    createdAt: new Date().toISOString(),
    content: 'We are excited to launch KATH, your premier partner for creating unforgettable events. Our team is dedicated to bringing your vision to life with creativity and precision.',
  },
  {
    id: '2',
    title: 'Top 5 Event Trends for 2024',
    image: '/images/fa8073312e772a6fbf1c0ec2c2f307b5.jpg',
    createdAt: new Date().toISOString(),
    content: 'Stay ahead of the curve with these top event trends. From sustainable gatherings to hybrid experiences, we explore what’s new and next in the event industry.',
  },
  {
    id: '3',
    title: 'How to Choose the Perfect Venue',
    image: '/images/fa8073312e772a6fbf1c0ec2c2f307b5.jpg',
    createdAt: new Date().toISOString(),
    content: 'The venue sets the stage for your event. Our guide will help you find a location that is not only beautiful but also functional and within your budget.',
  },
    {
    id: '4',
    title: 'The Art of Event Planning',
    image: '/images/fa8073312e772a6fbf1c0ec2c2f307b5.jpg',
    createdAt: new Date().toISOString(),
    content: 'Event planning is both a science and an art. Learn how we balance logistics with creative design to produce seamless and memorable experiences.',
  },
  {
    id: '5',
    title: 'Client Spotlight: A Wedding to Remember',
    image: '/images/fa8073312e772a6fbf1c0ec2c2f307b5.jpg',
    createdAt: new Date().toISOString(),
    content: 'We take you behind the scenes of a stunning wedding we recently organized. Discover how we transformed a simple space into a magical setting.',
  },
  {
    id: '6',
    title: 'Why Every Event Needs a Theme',
    image: '/images/fa8073312e772a6fbf1c0ec2c2f307b5.jpg',
    createdAt: new Date().toISOString(),
    content: 'A strong theme can elevate your event from ordinary to extraordinary. Find out how to choose a theme that resonates with your audience and purpose.',
  },
];

const BlogMainGrid = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {staticPosts.map((post) => (
            <Link href={`/blog-news-page?id=${post.id}`} key={post.id}>
              <div className="group cursor-pointer flex flex-col h-full">
                <div className="w-full aspect-[4/3] bg-black mb-6 overflow-hidden relative rounded-sm">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700"></div>
                  )}
                  <div className="absolute top-4 left-4 bg-[#a68a2d] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    {"News"}
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center text-gray-400 text-xs mb-3 uppercase tracking-widest font-medium">
                    <span>{new Date(post.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}</span>
                  </div>
                  <h3 className="text-black text-xl font-bold mb-3 group-hover:text-[#a68a2d] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.content?.substring(0, 150)}...
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block text-[#a68a2d] text-xs font-bold uppercase tracking-widest border-b border-[#a68a2d]/30 group-hover:border-[#a68a2d] transition-all pb-1">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogMainGrid;