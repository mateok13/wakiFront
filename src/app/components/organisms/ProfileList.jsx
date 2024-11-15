import { useState, useEffect } from 'react';
import { RxPerson } from 'react-icons/rx';
import { MdBarChart } from 'react-icons/md';
import { FiHelpCircle } from 'react-icons/fi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { LuLogOut } from 'react-icons/lu';
import { useAuth } from '../../context/AuthContext';
import { getNotifications } from '../../services/notificationService';
import { useDate } from '../../context/DateContext';

const iconSize = 20;

const options = [
  {
    name: 'Datos personales',
    icon: <RxPerson size={iconSize} />,
    link: '/profile/personal-data',
  },
  {
    name: 'Mis predicciones',
    icon: <MdBarChart size={iconSize} />,
    link: '/match/mypredictions',
    action: 'updateDate',
  },
  {
    name: 'Notificaciones',
    icon: <IoIosNotificationsOutline size={iconSize} />,
    link: '/profile/notifications',
  },
  {
    name: 'Ayuda',
    icon: <FiHelpCircle size={iconSize} />,
    link: '/profile/help',
  },
  {
    name: 'Cerrar sesión',
    icon: <LuLogOut size={iconSize} />,
    action: 'logout',
  },
];

export default function ProfileList() {
  const { logout } = useAuth();
  const { userId } = useAuth();
  const { updateSelectedDate } = useDate();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        if (userId) {
          const data = await getNotifications(userId);
          setNotifications(data);
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [userId]);

  const notificationCount = notifications.length;

  return (
    <div>
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => {
            if (option.action === 'logout') {
              logout();
            } else if (option.action === 'updateDate') {
              updateSelectedDate(new Date());
            }
          }}
          className={`relative flex h-14 w-full items-center justify-between bg-white px-5 text-label ${
            index === 0 ? 'rounded-t-lg' : ''
          } ${index === options.length - 1 ? 'rounded-b-lg' : ''}`}
        >
          <div className="flex items-center">
            {option.icon}
            <span className="ml-3">{option.name}</span>
          </div>
          {option.name === 'Notificaciones' && notificationCount > 0 && (
            <span className="ml-3">{notificationCount}</span>
          )}
        </div>
      ))}
    </div>
  );
}