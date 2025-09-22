import { NextResponse } from 'next/server';
import { getBlogPosts, getBlogByTag } from '../../../lib/blog-content';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 8;
    const tag = searchParams.get('tag');
    const excludeId = searchParams.get('exclude'); // ID of blog to exclude (featured blog)
    
    let posts;
    
    if (tag && tag !== 'all') {
      // Fetch posts by tag with pagination
      posts = await getBlogByTag(tag, { page, limit });
    } else {
      // Fetch all posts with pagination
      posts = await getBlogPosts({ page, limit });
    }
    
    // Filter out the excluded blog (featured blog) if specified
    if (excludeId && posts) {
      posts = posts.filter(post => post.id !== excludeId);
      
      // If we filtered out a post, we might need one more to maintain the limit
      if (posts.length < limit) {
        const additionalPosts = tag && tag !== 'all' 
          ? await getBlogByTag(tag, { page: page + 1, limit: 1 })
          : await getBlogPosts({ page: page + 1, limit: 1 });
        
        if (additionalPosts && additionalPosts.length > 0) {
          // Make sure the additional post is not the excluded one
          const filteredAdditional = additionalPosts.filter(post => post.id !== excludeId);
          posts = [...posts, ...filteredAdditional];
        }
      }
    }
    
    const responseData = {
      posts: posts || [],
      hasMore: posts?.length === limit,
      page,
      limit
    };
    
    return NextResponse.json(responseData);
    
  } catch (error) {
    console.error('Error in blog API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}