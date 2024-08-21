import Image from "next/image";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow, parseISO } from "date-fns";
import { Dialog, DialogTitle } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { UserIcon } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  no_hp: string | null;
  gambar: string | null;
  role: string;
  created_at: string;
  updated_at: string;
}

interface Comment {
  id: number;
  user_id: number;
  forum_id: number;
  parent_id: number | null;
  content: string;
  created_at: string | null;
  updated_at: string | null;
  user?: User;
}

interface Question {
  id: number;
  user_id: number;
  title: string;
  content: string | null;
  created_at: string | null;
  updated_at: string | null;
  user?: User;
  comments: Comment[];
}

const PopularForum = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeReplyIndex, setActiveReplyIndex] = useState<number | null>(null);
  const [replyContents, setReplyContents] = useState<{ [key: number]: string }>(
    {}
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );
  const router = useRouter();
  const storedToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const fetchForums = async () => {
      try {
        const response = await axios.get(
          "https://admin.hayedconsulting.com/api/forums",
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
              api_key: apiKey,
            },
          }
        );
        if (response.data.status === "success") {
          const fetchedQuestions = response.data.data;
          setQuestions(fetchedQuestions);
          setTotalPages(Math.ceil(fetchedQuestions.length / itemsPerPage));
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchForums();
  }, []);

  const openModal = (question: Question) => {
    setSelectedQuestion(question);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedQuestion(null);
  };

  const toggleReplies = (index: number) => {
    setActiveReplyIndex(activeReplyIndex === index ? null : index);
  };

  const handleReplyChange = (forumId: number, content: string) => {
    setReplyContents((prevContents) => ({
      ...prevContents,
      [forumId]: content,
    }));
  };

  const handleReplySubmit = async (forumId: number) => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      setReplyContents((prevContents) => ({
        ...prevContents,
        [forumId]: "",
      }));
      closeModal();
      toast.error("Please Login To Access Forum!");
      return;
    }

    try {
      const response = await axios.post(
        `https://admin.hayedconsulting.com/api/forums/${forumId}/comments`,
        { content: replyContents[forumId] || "" },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            api_key: apiKey,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        setReplyContents((prevContents) => ({
          ...prevContents,
          [forumId]: "",
        }));

        const updatedQuestions = questions.map((question) =>
          question.id === forumId
            ? {
                ...question,
                comments: [...question.comments, response.data.comment],
              }
            : question
        );
        setQuestions(updatedQuestions);
        toast.success("Reply Sent Successfully!");
        window.location.reload();
      } else {
        console.error("Error posting reply:", response.data);
      }
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Date not available";
    const date = parseISO(dateString);
    const relativeTime = formatDistanceToNow(date, { addSuffix: true });
    return `${relativeTime}`;
  };

  const displayedQuestions = questions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col w-full xl:w-[40%] border p-8">
      <h2 className="text-3xl font-semibold text-start text-black mb-8">
        #PopularForum
      </h2>
      <div className="flex flex-col gap-y-8">
        {displayedQuestions.map((question, index) => (
          <div
            key={question.id}
            className="w-full bg-white p-4 flex border hover:border-black-soft flex-col transition-all duration-300"
          >
            <div className="flex gap-x-6 w-full">
              <div className="bg-[#A9A5A9] text-white p-4 w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                <UserIcon />
              </div>
              <div className="flex flex-col gap-y-2 w-full">
                <p className="text-md md:text-xl font-semibold transition-all duration-300">
                  {question.title}
                </p>
                <div className="flex gap-x-8 text-[10px] md:text-xs">
                  <p>Ask by {question.user?.name}</p>
                  <p>{formatDate(question.created_at)}</p>
                </div>
                <div
                  className="flex items-center mt-4 transition-all duration-700 transform cursor-pointer"
                  onClick={() => openModal(question)}
                >
                  <p className="text-[10px] md:text-xs hover:underline">
                    See and Reply
                  </p>
                  <BiChevronDown className="ml-1 transition-transform duration-700 transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
      <Dialog
        open={isOpen}
        onClose={() => closeModal()}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black-original bg-opacity-50"
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full max-h-full p-6 space-y-4 border rounded-md shadow-md overflow-y-auto">
            <DialogTitle className="text-xl font-bold">
              {selectedQuestion?.title}
            </DialogTitle>
            <div className="text-sm overflow-y-auto max-h-80">
              <p>{selectedQuestion?.content}</p>
              <div className="mt-4">
                {selectedQuestion?.comments.map((comment) => (
                  <div className="flex gap-x-4 mb-4" key={comment.id}>
                    <div className="bg-[#A9A5A9] text-white p-4 w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                      <UserIcon />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        {comment.user?.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatDate(comment.created_at)}
                      </p>
                      <p className="text-sm">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form
              className="w-full mt-4 relative bg-gray-100 rounded transition-all duration-300"
              onSubmit={(e) => {
                e.preventDefault();
                handleReplySubmit(selectedQuestion?.id!);
              }}
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="w-[92%] h-12 px-4 rounded focus:outline-none focus:ring-0 outline-none border-none bg-gray-100 transition-all duration-300"
                  placeholder="Reply here..."
                  value={replyContents[selectedQuestion?.id!] || ""}
                  onChange={(e) =>
                    handleReplyChange(selectedQuestion?.id!, e.target.value)
                  }
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-4 flex items-center justify-center text-sm transition-all duration-300 hover:text-blue-600"
                >
                  Reply
                </button>
              </div>
            </form>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
      {/* <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 mx-1 border rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default PopularForum;
