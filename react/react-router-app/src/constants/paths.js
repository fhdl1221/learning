const PATHS = {
  // ROOT Layout의 중첩된 경로
  ROOT: {
    // Root Layout의 기본(진입) 경로
    INDEX: "/",
    ABOUT: "/about",
    POSTS: "/posts",
    POSTS_DETAIL: "/posts/:postId",
    getPostDetail: (postId) => `/post/${postId}`,
    PROFILE: "/profile",
  },
  // AuthLaytou의 중첩된 경로
  AUTH: {
    INDEX: "/auth",
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },
};

export default PATHS;
