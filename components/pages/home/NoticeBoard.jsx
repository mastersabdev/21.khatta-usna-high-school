"use client";

import { BsDownload, BsFillEyeFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Link from "next/link";
import { dateFormat } from "@/utils/date-format.util";

const NoticeBoard = ({ notices }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const openModal = (url) => {
    setPdfUrl(url);
    setModalOpen(true);
  };

  return (
    <>
      <div className="page-card mx-auto w-full md:max-h-[400px] overflow-y-scroll h-full">
        <h2 className="section-title mb-6 text-center">Notice Board</h2>
        <div className="space-y-4">
          {notices?.map((notice) => (
            <NoticeBoardCard
              key={notice?.id}
              notice={notice}
              openModal={openModal}
            />
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="h-[70vh] mt-6">
          <iframe
            src={pdfUrl}
            title="Notice PDF"
            className="w-full h-full rounded-lg border"
            frameBorder="0"
          />
        </div>
      </Modal>
    </>
  );
};

const NoticeBoardCard = ({ notice, openModal }) => {
  return (
    <div
      key={notice?.id}
      className="lg:px-4 p-2 border border-slate-200 rounded-xl flex items-center justify-between gap-2 bg-slate-50/50 hover:bg-primary-50/50 transition-colors"
    >
      <div>
        <h3 className="md:text-lg text-sm font-semibold text-slate-800">
          {notice?.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Published: {dateFormat(notice?.createdAt)}
        </p>
      </div>
      <div className="mt-2 flex flex-col lg:flex-row">
        <button
          className="bg-primary-200 px-4 py-2 rounded-t-md lg:rounded-t-none lg:rounded-l-md btn hover:bg-primary-300"
          onClick={() => openModal(notice?.pdf_url)}
        >
          <BsFillEyeFill className="text-primary-800" />
        </button>
        <Link
          href={notice?.pdf_url}
          download={`${notice?.title}.pdf`}
          target="_blank"
          className="bg-primary-400 px-4 py-2 rounded-b-md lg:rounded-b-none lg:rounded-r-md btn hover:bg-primary-500"
        >
          <BsDownload className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default NoticeBoard;
