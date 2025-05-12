import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaVideo, FaFileImage } from "react-icons/fa";
import { addPost, editPost, deletePost } from "../config/store/store";
import { useDispatch, useSelector } from "react-redux";

const Post = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [postText, setPostsText] = useState("");
  const [caption, setCaption] = useState("");
  const [mediaFile, setMediaFile] = useState(null);
  const [editingPostId, setEditingPostId] = useState(null);

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleSubmitChange = (e) => {
    setPostsText(e.target.value);
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setMediaFile(file);
    }
  };

  const postSubmit = () => {
    if (!postText.trim() && !mediaFile) return;
    if (editingPostId !== null) {
      dispatch(
        editPost({
          id: editingPostId,
          text: postText,
        })
      );
      setEditingPostId(null);
      setCaption("");
      setMediaFile(null);
    } else {
      dispatch(
        addPost({
          id: Date.now(),
          text: postText,
          caption,
          media: mediaFile ? URL.createObjectURL(mediaFile) : null,
          mediaType: mediaFile
            ? mediaFile.type.startsWith("video")
              ? "video"
              : "image"
            : null,
          timeStamp: new Date().toLocaleString(),
        })
      );
    }
    setPostsText("");
    setShowOverlay(false);
    setCaption("");
    setMediaFile(null);
  };
  const handleEditPost = (post) => {
    setPostsText(post.text);
    setEditingPostId(post.id);
    setShowOverlay(true);
  };

  const handleDeletePost = (postId) => {
    const confirmDelete = window.confirm(
      "Are You sure you want to delete this post"
    );
    if (confirmDelete) {
      dispatch(deletePost(postId));
    }
  };
  return (
    <div className="px-4 md:px-20 lg:px-28 py-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4 lg:col-span-5">
          <div className="bg-slate-200 rounded-md p-3">
            <div className="font-extrabold">Intro</div>
            <div className="font-light leading-5 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae sint debitis architecto voluptate blanditiis
            </div>
            <div>
              <button className="bg-white w-full rounded-md p-2">
                Edit bio
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7">
          <div className="bg-slate-200 rounded-md p-3">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src={image}
                  alt="profile"
                  className="w-9 h-9 rounded-full"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="What's on your mind"
                  className="bg-white w-full rounded-md p-1"
                  onFocus={() => setShowOverlay(true)}
                />
              </div>
            </div>
          </div>
          {posts.length > 0 && (
            <div className="mt-4">
              <div>Your Posts</div>
              {posts.map((post) => {
                return (
                  <div className="bg-slate-200 rounded-md p-3" key={post.id}>
                    <div className="flex justify-between items-center">
                      <div>
                        <button
                          className="bg-green-400 rounded-md px-2 py-1"
                          onClick={() => handleEditPost(post)}
                        >
                          Edit Post
                        </button>
                      </div>
                      <div>
                        <button
                          className="bg-red-500 rounded-md px-2 py-1"
                          onClick={() => handleDeletePost(post.id)}
                        >
                          Delete posts
                        </button>
                      </div>
                    </div>
                    <div>{post.text}</div>
                    {post.media &&
                      (post.mediaType === "video" ? (
                        <video src={post.media} controls width="100%" />
                      ) : (
                        <img
                          src={post.media}
                          alt="media"
                          className="my-2 h-56 w-full object-contain rounded-md"
                        />
                      ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {showOverlay && (
        <div className="fixed inset-0 bg-black opacity-80 z-50">
          <div className="bg-white relative rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 p-3">
            <div className="text-center text-xl font-extrabold">
              Create Post
            </div>
            <div className="absolute top-[7px] cursor-pointer">
              <RxCross1 onClick={() => setShowOverlay(false)} />
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img
                  src={image}
                  alt="profile"
                  className="h-8 w-8 rounded-full"
                />
              </div>
              <div className="text-black">Profile Name</div>
            </div>
            <div className="text-center">
              <form>
                <input
                  type="text"
                  placeholder="What's on your mind"
                  className="w-full focus:outline-none my-6"
                  value={postText}
                  onChange={handleSubmitChange}
                />
                <div className="flex items-center gap-4 my-2">
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer text-xl"
                  >
                    <FaFileImage />
                  </label>
                  <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleMediaChange}
                    className="hidden"
                  />

                  <label
                    htmlFor="video-upload"
                    className="cursor-pointer text-xl"
                  >
                    <FaVideo />
                  </label>
                  <input
                    type="file"
                    id="video-upload"
                    accept="video/*"
                    onChange={handleMediaChange}
                    className="hidden"
                  />
                </div>
              </form>
            </div>
            <button
              className="bg-blue-700 w-full rounded-md p-3"
              onClick={postSubmit}
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
