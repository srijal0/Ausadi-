import React from 'react';

const Profile = () => {
  return (
    <>
      <section className="hero">
        <h2>Your Profile</h2>
        <p>Welcome to your eco-friendly journey.</p>
      </section>
      <section className="profile-section">
        <div className="profile-card">
          <img src="/images/profile.jpg" alt="Profile" />
          <h3>Jane Doe</h3>
          <p>Nature Lover & Wellness Advocate</p>
        </div>
        <div className="profile-posts">
          <h3>Your Posts</h3>
          <div className="grid">
            <div className="post-card">
              <img src="/images/post1.jpg" alt="Post 1" />
            </div>
            <div className="post-card">
              <img src="/images/post2.jpg" alt="Post 2" />
            </div>
            <div className="post-card">
              <img src="/images/post3.jpg" alt="Post 3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
