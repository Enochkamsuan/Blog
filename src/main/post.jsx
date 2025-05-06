import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { addPost, editPost, deletePost } from "../config/store";
import { useDispatch, useSelector } from "react-redux";

const Post = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [postText, setPostsText] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleSubmitChange = (e) => {
    setPostsText(e.target.value);
  };

  const postSubmit = () => {
    if (!postText.trim()) return;

    if (editingPostId !== null) {
      dispatch(
        editPost({
          id: editingPostId,
          text: postText,
        })
      );
      setEditingPostId(null);
    } else {
      dispatch(
        addPost({
          id: Date.now,
          text: postText,
          timeStamp: new Date.toLocaleString(),
        })
      );
    }
    setPostsText("");
    setShowOverlay(false);
  };
  const handleEditPost = (post) => {
    setPostsText(post.text);
    setEditingPostId(post.id);
    setShowOverlay(true);
  };

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };
  return (
    <div className="px-4 md:px-20 lg:px-28">
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
        </div>
      </div>
      {showOverlay && (
        <div className="fixed inset-0 bg-black opacity-80 flex justify-center items-center z-50">
          <div className="bg-white relative rounded-lg w-1/2 p-3">
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
            <div>
              <input
                type="text"
                placeholder="What's on your mind"
                className="w-full focus:outline-none my-6"
              />
            </div>
            <button className="w-full rounded-md p-3">Post</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
