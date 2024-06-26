import { notification1 } from "@assets/index";
import { notificationImages } from "@constants/index";
import React from "react";

type NotificationProps = {
  className: string;
  title: string;
};

const Notification: React.FC<NotificationProps> = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}>
      <img
        className="rounded-xl"
        src={notification1}
        alt={notification1}
        title={notification1}
        width={62}
        height={62}
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex item-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
                key={index}>
                <img
                  className="w-full"
                  src={item}
                  alt={item}
                  title={item}
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>

          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
