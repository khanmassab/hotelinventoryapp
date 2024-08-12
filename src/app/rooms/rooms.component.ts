import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Motel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [
    {
      roomNumber: 2432343,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'www.google.com',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.5
    },
    {
      roomNumber: 2432543,
      roomType: 'Private Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 5020,
      photos: 'www.google.com',
      checkInTime: new Date('14-Nov-2021'),
      checkOutTime: new Date('15-Nov-2021'),
      rating: 3.4
    },
    {
      roomNumber: 2432123,
      roomType: 'Private Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 5020,
      photos: 'www.google.com',
      checkInTime: new Date('15-Nov-2021'),
      checkOutTime: new Date('16-Nov-2021'),
      rating: 5.0
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
