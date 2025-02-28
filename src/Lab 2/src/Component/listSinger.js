import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";

const ListSinger = () => {
  const songs = [
    {
      id: 1,
      name: "My Tam",
      artist: "Music",
      desc: "Da Nang",
      image:
        "https://media-cdn-v2.laodong.vn/storage/newsportal/2021/1/20/872700/13-Chot-151767007234.jpg",
    },
    {
      id: 2,
      name: "Ho Ngoc Ha",
      artist: "Music",
      desc: "Hue",
      image:
        "https://myphammoi.vn/wp-content/uploads/2023/05/Ho-Ngoc-Ha-Toi-khong-hat-hay-nhay-dep-nhung-co-moi-thu-mot-it-2-534x800.jpg",
    },
    {
      id: 3,
      name: "Quang Hung MasterD",
      artist: "Music",
      desc: "Quang Binh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUaRidQOABcW_n8IVeXlE8YDx93jySaqV1Pg&s",
    },
    {
      id: 4,
      name: "Son Tung MTP",
      artist: "Music",
      desc: "Ninh Binh",
      image:
        "https://danviet.mediacdn.vn/296231569849192448/2024/6/13/son-tung-mtp-17182382517241228747767.jpg",
    },
    {
      id: 5,
      name: "Duc Phuc",
      artist: "Music",
      desc: "Ha Noi",
      image:
        "https://trixie.com.vn/media/images/article/23704561/tieu-su-ca-si-duc-phuc-trixie-1.jpg",
    },
    {
      id: 6,
      name: "Justin Bieber",
      artist: "Music",
      desc: "united states",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg",
    },
  ];
  return (
    <ul className="space-y-2">
      {songs.map((song) => (
        <li
          key={song.id}
          className="flex items-center justify-between p-2 border-b border-gray-200 hover:bg-gray-50"
        >
          <div className="flex items-center space-x-4">
            <img
              src={song.image}
              alt={`${song.name}`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-red-500">
                {song.name} -{" "}
                <span className="text-[#000] text-[20px]">{song.desc}</span>
              </p>
              <p className="text-sm text-gray-500">{song.artist}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="text-black hover:text-red-700">
              <IoIosHeartEmpty />
            </button>
            <button className="text-black hover:text-red-700">
              <FaRegCirclePlay />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <BsThreeDotsVertical />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListSinger;
