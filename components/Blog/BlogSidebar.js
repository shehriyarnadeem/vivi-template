import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <div className="sidebar-wrap">
            <div className="search-wrap sidebar-widget">
                <form className="search-form">
                    <input 
                        className="form-control" 
                        name="search" 
                        placeholder="SEARCH" 
                        type="text" 
                    />
                    <button className="search-button" type="submit">
                        <i className="bx bx-search"></i>
                    </button>
                </form>	
            </div>

            <div className="popular-post-wrap sidebar-widget">
                <h3>Popular Post</h3>
                <ul>
                    <li>
                        <Link href="/blog-details">
                            <a>
                                <img src="/img/blog-details/popular-img-1.jpg" alt="Image" />
                                <h3>Tattoo life</h3>
                                <span>June 27, 2020</span>	
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-details">
                            <a>
                                <img src="/img/blog-details/popular-img-2.jpg" alt="Image" />
                                <h3>Human faith</h3>
                                <span>June 26, 2020</span>	
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-details">
                            <a>
                                <img src="/img/blog-details/popular-img-3.jpg" alt="Image" />
                                <h3>Alone journey</h3>
                                <span>June 26, 2020</span>	
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="categories-wrap sidebar-widget">
                <h3>Categories</h3>

                <ul>
                    <li>
                        <Link href="/blog-grid"><a>Upcoming movies</a></Link>
                    </li>
                    <li>
                        <Link href="/blog-grid"><a>Blockbusters</a></Link>
                    </li>
                    <li>
                        <Link href="/blog-grid"><a>Awarded</a></Link>
                    </li>
                    <li>
                        <Link href="/blog-grid"><a>Festival</a></Link>
                    </li>
                    <li>
                        <Link href="/blog-grid"><a>Trailer</a></Link>
                    </li>
                    <li>
                        <Link href="/blog-grid"><a>Actors</a></Link>
                    </li>
                    <li>
                        <Link href="/blog-grid"><a>Film</a></Link>
                    </li>
                    <li>
                        <Link href="/blog-grid"><a>Video</a></Link>
                    </li>
                </ul>
            </div>

            <div className="about-wrap sidebar-widget">
                <h3>About</h3>
                <img src="/img/about-img2.jpg" alt="Image" />
                <p>We're a London based video production comp-any that aims to inspire you through stories about people who defy the times we live.</p>
            </div>

            <div className="tags-wrap sidebar-widget">
                <h3>Tags</h3>

                <ul>
                    <li>
                        <Link href="/blog-grid"><a>Actor</a></Link>
                    </li>
                    <li>
                        <Link href="/blog-grid"><a>Film Production</a></Link>
                    </li>
                    <li>
                        <Link href="/blog-grid"><a>Cinema</a></Link>
                    </li>
                    <li>
                    <Link href="/blog-grid"><a>Movie</a></Link>
                    </li>
                    <li>
                        <Link href="/blog-grid"><a>Director</a></Link>
                    </li>
                    <li>
                        <Link href="/blog-grid"><a>Entertainment</a></Link>
                    </li>
                    <li>
                        <Link href="/blog-grid"><a>Awarded</a></Link>
                    </li>
                    <li>
                        <Link href="/blog-grid"><a>Production</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BlogSidebar;