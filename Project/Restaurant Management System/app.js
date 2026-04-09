// ===================================================
// GrandVista Hotel Management System - app.js
// ===================================================

// ===== STATE =====
const state = {
  rooms: [
    {
      id: "R101",
      number: "101",
      floor: 1,
      type: "Standard",
      capacity: 2,
      rate: 2500,
      status: "occupied",
      amenities: "AC, WiFi, TV",
      guest: "Priya Sharma",
    },
    {
      id: "R102",
      number: "102",
      floor: 1,
      type: "Standard",
      capacity: 2,
      rate: 2500,
      status: "available",
      amenities: "AC, WiFi, TV",
      guest: "",
    },
    {
      id: "R103",
      number: "103",
      floor: 1,
      type: "Deluxe",
      capacity: 2,
      rate: 4000,
      status: "cleaning",
      amenities: "AC, WiFi, TV, Minibar",
      guest: "",
    },
    {
      id: "R104",
      number: "104",
      floor: 1,
      type: "Standard",
      capacity: 3,
      rate: 3000,
      status: "occupied",
      amenities: "AC, WiFi, TV",
      guest: "Rahul Verma",
    },
    {
      id: "R201",
      number: "201",
      floor: 2,
      type: "Deluxe",
      capacity: 2,
      rate: 4500,
      status: "available",
      amenities: "AC, WiFi, TV, Minibar, Balcony",
      guest: "",
    },
    {
      id: "R202",
      number: "202",
      floor: 2,
      type: "Suite",
      capacity: 4,
      rate: 8000,
      status: "occupied",
      amenities: "AC, WiFi, Smart TV, Jacuzzi, Lounge",
      guest: "Anjali Mehta",
    },
    {
      id: "R203",
      number: "203",
      floor: 2,
      type: "Deluxe",
      capacity: 2,
      rate: 4500,
      status: "maintenance",
      amenities: "AC, WiFi, TV, Minibar",
      guest: "",
    },
    {
      id: "R204",
      number: "204",
      floor: 2,
      type: "Standard",
      capacity: 2,
      rate: 2500,
      status: "available",
      amenities: "AC, WiFi, TV",
      guest: "",
    },
    {
      id: "R301",
      number: "301",
      floor: 3,
      type: "Suite",
      capacity: 4,
      rate: 9000,
      status: "occupied",
      amenities: "AC, WiFi, Smart TV, Minibar, Sea View",
      guest: "Karan Malhotra",
    },
    {
      id: "R302",
      number: "302",
      floor: 3,
      type: "Deluxe",
      capacity: 2,
      rate: 4200,
      status: "available",
      amenities: "AC, WiFi, TV, Balcony",
      guest: "",
    },
    {
      id: "R303",
      number: "303",
      floor: 3,
      type: "Standard",
      capacity: 2,
      rate: 2500,
      status: "occupied",
      amenities: "AC, WiFi, TV",
      guest: "Deepa Iyer",
    },
    {
      id: "R401",
      number: "401",
      floor: 4,
      type: "Presidential",
      capacity: 6,
      rate: 18000,
      status: "available",
      amenities: "Full Suite, Butler, Jacuzzi, Terrace",
      guest: "",
    },
  ],
  reservations: [
    {
      id: "RES001",
      guest: "Arjun Kapoor",
      room: "202",
      checkIn: "2024-04-09",
      checkOut: "2024-04-12",
      nights: 3,
      amount: 24000,
      status: "confirmed",
      adults: 2,
      children: 0,
    },
    {
      id: "RES002",
      guest: "Sneha Pillai",
      room: "101",
      checkIn: "2024-04-09",
      checkOut: "2024-04-10",
      nights: 1,
      amount: 2500,
      status: "confirmed",
      adults: 1,
      children: 0,
    },
    {
      id: "RES003",
      guest: "Vikram Singh",
      room: "301",
      checkIn: "2024-04-10",
      checkOut: "2024-04-14",
      nights: 4,
      amount: 36000,
      status: "confirmed",
      adults: 2,
      children: 2,
    },
    {
      id: "RES004",
      guest: "Nisha Gupta",
      room: "201",
      checkIn: "2024-04-11",
      checkOut: "2024-04-13",
      nights: 2,
      amount: 9000,
      status: "pending",
      adults: 2,
      children: 0,
    },
    {
      id: "RES005",
      guest: "Rohit Sharma",
      room: "103",
      checkIn: "2024-04-08",
      checkOut: "2024-04-09",
      nights: 1,
      amount: 4000,
      status: "confirmed",
      adults: 2,
      children: 1,
    },
    {
      id: "RES006",
      guest: "Meera Nair",
      room: "304",
      checkIn: "2024-04-07",
      checkOut: "2024-04-08",
      nights: 1,
      amount: 2500,
      status: "cancelled",
      adults: 1,
      children: 0,
    },
  ],
  guests: [
    {
      id: "G001",
      firstName: "Priya",
      lastName: "Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 98765 43210",
      nationality: "Indian",
      dob: "1990-05-15",
      address: "42 MG Road, Bengaluru",
      visits: 5,
      status: "active",
    },
    {
      id: "G002",
      firstName: "Rahul",
      lastName: "Verma",
      email: "rahul.verma@email.com",
      phone: "+91 87654 32109",
      nationality: "Indian",
      dob: "1985-11-22",
      address: "17 Connaught Place, Delhi",
      visits: 3,
      status: "active",
    },
    {
      id: "G003",
      firstName: "Anjali",
      lastName: "Mehta",
      email: "anjali.mehta@email.com",
      phone: "+91 76543 21098",
      nationality: "Indian",
      dob: "1992-08-30",
      address: "Bandra West, Mumbai",
      visits: 8,
      status: "active",
    },
    {
      id: "G004",
      firstName: "Karan",
      lastName: "Malhotra",
      email: "karan.m@email.com",
      phone: "+91 65432 10987",
      nationality: "Indian",
      dob: "1988-03-14",
      address: "Sector 17, Chandigarh",
      visits: 2,
      status: "active",
    },
    {
      id: "G005",
      firstName: "Deepa",
      lastName: "Iyer",
      email: "deepa.iyer@email.com",
      phone: "+91 54321 09876",
      nationality: "Indian",
      dob: "1995-12-01",
      address: "T Nagar, Chennai",
      visits: 1,
      status: "active",
    },
    {
      id: "G006",
      firstName: "James",
      lastName: "Wilson",
      email: "james.w@email.com",
      phone: "+44 7911 123456",
      nationality: "British",
      dob: "1978-07-20",
      address: "London, UK",
      visits: 2,
      status: "active",
    },
  ],
  bills: [
    {
      id: "INV001",
      guest: "Priya Sharma",
      room: "101",
      period: "Apr 5-9",
      roomCharges: 10000,
      extras: 1500,
      total: 11500,
      status: "paid",
      method: "UPI",
    },
    {
      id: "INV002",
      guest: "Anjali Mehta",
      room: "202",
      period: "Apr 8-12",
      roomCharges: 32000,
      extras: 4200,
      total: 36200,
      status: "paid",
      method: "Credit Card",
    },
    {
      id: "INV003",
      guest: "Rohit Sharma",
      room: "103",
      period: "Apr 8-9",
      roomCharges: 4000,
      extras: 800,
      total: 4800,
      status: "unpaid",
      method: "Pending",
    },
    {
      id: "INV004",
      guest: "Vikram Singh",
      room: "301",
      period: "Apr 6-10",
      roomCharges: 36000,
      extras: 6500,
      total: 42500,
      status: "paid",
      method: "Bank Transfer",
    },
  ],
  hkTasks: [
    {
      id: "HK001",
      room: "103",
      type: "Deep Cleaning",
      staff: "Ramesh Kumar",
      priority: "High",
      status: "pending",
      notes: "Post checkout cleaning",
    },
    {
      id: "HK002",
      room: "203",
      type: "Maintenance",
      staff: "Suresh Patel",
      priority: "Urgent",
      status: "progress",
      notes: "AC repair needed",
    },
    {
      id: "HK003",
      room: "302",
      type: "Regular Cleaning",
      staff: "Lakshmi Devi",
      priority: "Normal",
      status: "pending",
      notes: "",
    },
    {
      id: "HK004",
      room: "101",
      type: "Turndown Service",
      staff: "Ramesh Kumar",
      priority: "Normal",
      status: "done",
      notes: "",
    },
    {
      id: "HK005",
      room: "401",
      type: "Deep Cleaning",
      staff: "Lakshmi Devi",
      priority: "High",
      status: "done",
      notes: "VIP arrival prep",
    },
  ],
  orders: [
    {
      id: "ORD001",
      location: "Room 202",
      items: "Paneer Butter Masala, Naan x4, Raita",
      amount: 1200,
      time: "09:30 AM",
      status: "delivered",
      type: "Room Service",
    },
    {
      id: "ORD002",
      location: "Table 5",
      items: "Masala Dosa x2, Filter Coffee x2",
      amount: 480,
      time: "10:15 AM",
      status: "delivered",
      type: "Dine-In",
    },
    {
      id: "ORD003",
      location: "Room 301",
      items: "Club Sandwich, Fresh Juice x2, Cheese Fries",
      amount: 950,
      time: "11:45 AM",
      status: "preparing",
      type: "Room Service",
    },
    {
      id: "ORD004",
      location: "Table 2",
      items: "Aloo Paratha x3, Curd, Tea",
      amount: 380,
      time: "12:10 PM",
      status: "preparing",
      type: "Dine-In",
    },
  ],
  staff: [
    {
      id: "ST001",
      name: "Rajesh Kumar",
      dept: "Front Desk",
      role: "Receptionist",
      shift: "Morning (6AM-2PM)",
      phone: "+91 98765 11111",
      salary: 28000,
      status: "active",
    },
    {
      id: "ST002",
      name: "Preethi Nair",
      dept: "Housekeeping",
      role: "Supervisor",
      shift: "Morning (6AM-2PM)",
      phone: "+91 98765 22222",
      salary: 32000,
      status: "active",
    },
    {
      id: "ST003",
      name: "Arun Tiwari",
      dept: "Restaurant",
      role: "Head Chef",
      shift: "Morning (6AM-2PM)",
      phone: "+91 98765 33333",
      salary: 55000,
      status: "active",
    },
    {
      id: "ST004",
      name: "Sunita Devi",
      dept: "Housekeeping",
      role: "Room Attendant",
      shift: "Afternoon (2PM-10PM)",
      phone: "+91 98765 44444",
      salary: 22000,
      status: "active",
    },
    {
      id: "ST005",
      name: "Mohan Das",
      dept: "Security",
      role: "Security Guard",
      shift: "Night (10PM-6AM)",
      phone: "+91 98765 55555",
      salary: 20000,
      status: "on-leave",
    },
    {
      id: "ST006",
      name: "Kavita Singh",
      dept: "Front Desk",
      role: "Concierge",
      shift: "Afternoon (2PM-10PM)",
      phone: "+91 98765 66666",
      salary: 26000,
      status: "active",
    },
  ],
  checkedIn: [
    {
      reservationId: "RES001",
      guest: "Priya Sharma",
      room: "101",
      checkIn: "2024-04-09",
      checkOut: "2024-04-12",
      rate: 2500,
      extras: [],
    },
    {
      reservationId: "CI002",
      guest: "Anjali Mehta",
      room: "202",
      checkIn: "2024-04-08",
      checkOut: "2024-04-12",
      rate: 8000,
      extras: ["Restaurant: ₹1200", "Laundry: ₹400"],
    },
    {
      reservationId: "CI003",
      guest: "Karan Malhotra",
      room: "301",
      checkIn: "2024-04-07",
      checkOut: "2024-04-12",
      rate: 9000,
      extras: ["Spa: ₹2500", "Restaurant: ₹3200"],
    },
    {
      reservationId: "CI004",
      guest: "Rahul Verma",
      room: "104",
      checkIn: "2024-04-09",
      checkOut: "2024-04-11",
      rate: 3000,
      extras: [],
    },
    {
      reservationId: "CI005",
      guest: "Deepa Iyer",
      room: "303",
      checkIn: "2024-04-09",
      checkOut: "2024-04-10",
      rate: 2500,
      extras: ["Restaurant: ₹680"],
    },
  ],
  nextId: { res: 7, guest: 7, bill: 5, hk: 6, ord: 5, staff: 7 },
  selectedCheckIn: null,
  selectedCheckOut: null,
};

// ===== NAVIGATION =====
function initNav() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      navigateTo(page);
    });
  });
}

function navigateTo(page) {
  document
    .querySelectorAll(".nav-item")
    .forEach((i) => i.classList.remove("active"));
  document.querySelector(`[data-page="${page}"]`)?.classList.add("active");
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById(`page-${page}`)?.classList.add("active");
  document.getElementById("breadcrumb").textContent =
    page.charAt(0).toUpperCase() + page.slice(1);
  renderPage(page);
  // close sidebar on mobile
  document.getElementById("sidebar").classList.remove("open");
}

function renderPage(page) {
  switch (page) {
    case "dashboard":
      renderDashboard();
      break;
    case "rooms":
      renderRooms();
      break;
    case "reservations":
      renderReservations();
      break;
    case "checkin":
      renderCheckIn();
      break;
    case "guests":
      renderGuests();
      break;
    case "billing":
      renderBilling();
      break;
    case "reports":
      renderReports();
      break;
    case "housekeeping":
      renderHousekeeping();
      break;
    case "restaurant":
      renderRestaurant();
      break;
    case "staff":
      renderStaff();
      break;
  }
}

// ===== DATE =====
function initDate() {
  const el = document.getElementById("topbarDate");
  const now = new Date();
  el.textContent = now.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ===== DASHBOARD =====
function renderDashboard() {
  // Stats
  const occupied = state.rooms.filter((r) => r.status === "occupied").length;
  const available = state.rooms.filter((r) => r.status === "available").length;
  const todayArrivals = state.reservations.filter(
    (r) => r.status === "confirmed" && r.checkIn === todayStr(),
  ).length;
  document.getElementById("stat-occupied").textContent = occupied;
  document.getElementById("stat-available").textContent = available;
  document.getElementById("stat-reservations").textContent = todayArrivals || 8;

  // Weekly Chart
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const vals = [58, 72, 65, 80, 85, 92, 60];
  const chart = document.getElementById("weeklyChart");
  chart.innerHTML = days
    .map(
      (d, i) => `
    <div class="bar-wrap">
      <div class="bar-track">
        <div class="bar-fill" style="height:${vals[i]}%"></div>
      </div>
      <span class="bar-label">${d}</span>
    </div>
  `,
    )
    .join("");

  // Arrivals
  const arrivals = [
    { name: "Arjun Kapoor", room: "202", time: "12:00 PM" },
    { name: "Sneha Pillai", room: "101", time: "02:30 PM" },
    { name: "Vikram Singh", room: "301", time: "04:00 PM" },
    { name: "Nisha Gupta", room: "201", time: "05:30 PM" },
  ];
  document.getElementById("arrivalList").innerHTML = arrivals
    .map(
      (a) => `
    <div class="arrival-item">
      <div class="arrival-avatar">${initials(a.name)}</div>
      <div>
        <div class="arrival-name">${a.name}</div>
        <div class="arrival-meta">${a.time}</div>
      </div>
      <div class="arrival-room">${a.room}</div>
    </div>
  `,
    )
    .join("");

  // Activity
  const activities = [
    {
      text: "Room 202 checked in — Anjali Mehta",
      time: "9:45 AM",
      color: "var(--gold)",
    },
    {
      text: "Invoice INV004 paid — ₹42,500",
      time: "9:30 AM",
      color: "var(--success)",
    },
    {
      text: "Housekeeping task completed — Room 401",
      time: "9:15 AM",
      color: "var(--accent2)",
    },
    {
      text: "New reservation — Vikram Singh (Room 301)",
      time: "9:00 AM",
      color: "var(--gold)",
    },
    {
      text: "Room 203 set to maintenance",
      time: "8:45 AM",
      color: "var(--warning)",
    },
    {
      text: "Order ORD002 delivered — Table 5",
      time: "8:30 AM",
      color: "var(--success)",
    },
  ];
  document.getElementById("activityList").innerHTML = activities
    .map(
      (a) => `
    <div class="activity-item">
      <div class="activity-dot" style="background:${a.color}"></div>
      <div class="activity-text">${a.text}</div>
      <div class="activity-time">${a.time}</div>
    </div>
  `,
    )
    .join("");
}

// ===== ROOMS =====
function renderRooms(filter = "all", search = "") {
  let rooms = state.rooms;
  if (filter !== "all") rooms = rooms.filter((r) => r.status === filter);
  if (search)
    rooms = rooms.filter(
      (r) =>
        r.number.includes(search) ||
        r.type.toLowerCase().includes(search.toLowerCase()) ||
        r.status.includes(search.toLowerCase()),
    );
  document.getElementById("roomGrid").innerHTML =
    rooms
      .map(
        (r) => `
    <div class="room-card ${r.status}">
      <div class="room-number">Room ${r.number}</div>
      <div class="room-type">${r.type} · Floor ${r.floor} · ${r.capacity} Guests</div>
      <div class="room-rate">₹${r.rate.toLocaleString()} / night</div>
      ${r.guest ? `<div class="room-amenities" style="color:var(--text2)">👤 ${r.guest}</div>` : ""}
      <div class="room-amenities">${r.amenities}</div>
      <div class="room-status ${r.status}">
        <span>${statusIcon(r.status)}</span>${r.status.charAt(0).toUpperCase() + r.status.slice(1)}
      </div>
      <div class="table-actions" style="margin-top:.6rem;justify-content:flex-end">
        <button class="action-btn" onclick="changeRoomStatus('${r.id}')" title="Change Status"><i class="fa-solid fa-rotate"></i></button>
        <button class="action-btn danger" onclick="deleteRoom('${r.id}')" title="Delete"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  `,
      )
      .join("") ||
    '<div style="color:var(--text3);padding:1rem">No rooms found.</div>';
}

function statusIcon(s) {
  const m = {
    available: "🟢",
    occupied: "🔴",
    maintenance: "🟡",
    cleaning: "🧹",
  };
  return m[s] || "⬜";
}

document.addEventListener("change", (e) => {});

function initRoomFilters() {
  document.querySelectorAll("#page-rooms .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll("#page-rooms .filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderRooms(
        btn.dataset.filter,
        document.getElementById("roomSearch").value,
      );
    });
  });
  document.getElementById("roomSearch").addEventListener("input", (e) => {
    const active = document.querySelector("#page-rooms .filter-btn.active");
    renderRooms(active?.dataset.filter || "all", e.target.value);
  });
}

function addRoom() {
  const no = document.getElementById("newRoomNo").value.trim();
  const floor = document.getElementById("newRoomFloor").value;
  const type = document.getElementById("newRoomType").value;
  const cap = document.getElementById("newRoomCap").value;
  const rate = document.getElementById("newRoomRate").value;
  const status = document.getElementById("newRoomStatus").value;
  const amenities =
    document.getElementById("newRoomAmenities").value || "AC, WiFi";
  if (!no || !rate) {
    toast("Please fill in Room Number and Rate", "error");
    return;
  }
  state.rooms.push({
    id: "R" + no,
    number: no,
    floor: parseInt(floor) || 1,
    type,
    capacity: parseInt(cap) || 2,
    rate: parseInt(rate),
    status,
    amenities,
    guest: "",
  });
  closeModal("addRoomModal");
  renderRooms();
  toast(`Room ${no} added successfully`, "success");
  // clear fields
  [
    "newRoomNo",
    "newRoomFloor",
    "newRoomCap",
    "newRoomRate",
    "newRoomAmenities",
  ].forEach((id) => (document.getElementById(id).value = ""));
}

function changeRoomStatus(id) {
  const r = state.rooms.find((x) => x.id === id);
  if (!r) return;
  const cycle = ["available", "cleaning", "maintenance"];
  if (r.status === "occupied") {
    toast("Cannot change status of occupied room", "error");
    return;
  }
  const idx = cycle.indexOf(r.status);
  r.status = cycle[(idx + 1) % cycle.length];
  renderRooms();
  toast(`Room ${r.number} → ${r.status}`, "info");
}

function deleteRoom(id) {
  const r = state.rooms.find((x) => x.id === id);
  if (r?.status === "occupied") {
    toast("Cannot delete occupied room", "error");
    return;
  }
  state.rooms = state.rooms.filter((x) => x.id !== id);
  renderRooms();
  toast("Room removed", "info");
}

// ===== RESERVATIONS =====
function renderReservations(filter = "all", search = "") {
  let res = state.reservations;
  if (filter !== "all") res = res.filter((r) => r.status === filter);
  if (search)
    res = res.filter(
      (r) =>
        r.guest.toLowerCase().includes(search.toLowerCase()) ||
        r.room.includes(search),
    );
  document.getElementById("reservationBody").innerHTML =
    res
      .map(
        (r) => `
    <tr>
      <td><strong>${r.id}</strong></td>
      <td>${r.guest}</td>
      <td>Room ${r.room}</td>
      <td>${r.checkIn}</td>
      <td>${r.checkOut}</td>
      <td>${r.nights}</td>
      <td>₹${r.amount.toLocaleString()}</td>
      <td><span class="status-badge ${r.status}">${r.status.charAt(0).toUpperCase() + r.status.slice(1)}</span></td>
      <td><div class="table-actions">
        <button class="action-btn" onclick="confirmRes('${r.id}')" title="Confirm"><i class="fa-solid fa-check"></i></button>
        <button class="action-btn danger" onclick="cancelRes('${r.id}')" title="Cancel"><i class="fa-solid fa-ban"></i></button>
      </div></td>
    </tr>
  `,
      )
      .join("") ||
    '<tr><td colspan="9" style="color:var(--text3);text-align:center;padding:1.5rem">No reservations found.</td></tr>';
}

function initResFilters() {
  document.querySelectorAll("#page-reservations .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll("#page-reservations .filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderReservations(
        btn.dataset.filter,
        document.getElementById("resSearch").value,
      );
    });
  });
  document.getElementById("resSearch").addEventListener("input", (e) => {
    const active = document.querySelector(
      "#page-reservations .filter-btn.active",
    );
    renderReservations(active?.dataset.filter || "all", e.target.value);
  });
}

function populateRoomDropdown() {
  const sel = document.getElementById("resRoom");
  if (!sel) return;
  sel.innerHTML = state.rooms
    .filter((r) => r.status === "available")
    .map(
      (r) =>
        `<option value="${r.number}">Room ${r.number} - ${r.type} (₹${r.rate})</option>`,
    )
    .join("");
}

function addReservation() {
  const guest = document.getElementById("resGuest").value.trim();
  const room = document.getElementById("resRoom").value;
  const checkIn = document.getElementById("resCheckIn").value;
  const checkOut = document.getElementById("resCheckOut").value;
  const adults = parseInt(document.getElementById("resAdults").value) || 1;
  const children = parseInt(document.getElementById("resChildren").value) || 0;
  if (!guest || !checkIn || !checkOut) {
    toast("Please fill all required fields", "error");
    return;
  }
  const nights = Math.max(
    1,
    Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)),
  );
  const r = state.rooms.find((x) => x.number === room);
  const amount = (r?.rate || 2500) * nights;
  const id = `RES00${state.nextId.res++}`;
  state.reservations.unshift({
    id,
    guest,
    room,
    checkIn,
    checkOut,
    nights,
    amount,
    status: "confirmed",
    adults,
    children,
  });
  closeModal("addReservationModal");
  renderReservations();
  toast(`Reservation ${id} confirmed for ${guest}`, "success");
  ["resGuest", "resCheckIn", "resCheckOut"].forEach(
    (i) => (document.getElementById(i).value = ""),
  );
}

function confirmRes(id) {
  const r = state.reservations.find((x) => x.id === id);
  if (r) {
    r.status = "confirmed";
    renderReservations();
    toast(`${id} confirmed`, "success");
  }
}
function cancelRes(id) {
  const r = state.reservations.find((x) => x.id === id);
  if (r) {
    r.status = "cancelled";
    renderReservations();
    toast(`${id} cancelled`, "info");
  }
}

// ===== CHECK-IN / OUT =====
function renderCheckIn() {
  renderCheckedInList();
  const ciInput = document.getElementById("ciSearch");
  const coInput = document.getElementById("coSearch");
  ciInput.value = "";
  coInput.value = "";
  document.getElementById("ciResults").innerHTML = "";
  document.getElementById("coResults").innerHTML = "";
  document.getElementById("coSummary").style.display = "none";
  state.selectedCheckIn = null;
  state.selectedCheckOut = null;

  ciInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    if (!q) {
      document.getElementById("ciResults").innerHTML = "";
      return;
    }
    const matches = state.reservations.filter(
      (r) =>
        r.status === "confirmed" &&
        (r.guest.toLowerCase().includes(q) || r.id.toLowerCase().includes(q)),
    );
    document.getElementById("ciResults").innerHTML =
      matches
        .map(
          (r) => `
      <div class="ci-item" onclick="selectCI('${r.id}')">
        <div>
          <div style="font-size:.85rem;font-weight:500">${r.guest}</div>
          <div style="font-size:.75rem;color:var(--text3)">${r.id} · Room ${r.room} · ${r.checkIn} → ${r.checkOut}</div>
        </div>
      </div>
    `,
        )
        .join("") ||
      '<div style="font-size:.82rem;color:var(--text3);padding:.5rem">No matching reservations</div>';
  });

  coInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    if (!q) {
      document.getElementById("coResults").innerHTML = "";
      document.getElementById("coSummary").style.display = "none";
      return;
    }
    const matches = state.checkedIn.filter(
      (c) => c.guest.toLowerCase().includes(q) || c.room.includes(q),
    );
    document.getElementById("coResults").innerHTML =
      matches
        .map(
          (c) => `
      <div class="ci-item" onclick="selectCO('${c.reservationId}')">
        <div>
          <div style="font-size:.85rem;font-weight:500">${c.guest}</div>
          <div style="font-size:.75rem;color:var(--text3)">Room ${c.room} · Checked in: ${c.checkIn}</div>
        </div>
      </div>
    `,
        )
        .join("") ||
      '<div style="font-size:.82rem;color:var(--text3);padding:.5rem">No guests found</div>';
  });
}

window.selectCI = function (id) {
  state.selectedCheckIn = state.reservations.find((r) => r.id === id);
  document.querySelectorAll("#ciResults .ci-item").forEach((el) => {
    el.classList.remove("selected");
  });
  event.currentTarget.classList.add("selected");
};

window.selectCO = function (id) {
  state.selectedCheckOut = state.checkedIn.find((c) => c.reservationId === id);
  document
    .querySelectorAll("#coResults .ci-item")
    .forEach((el) => el.classList.remove("selected"));
  event.currentTarget.classList.add("selected");
  showCheckoutSummary();
};

function showCheckoutSummary() {
  const c = state.selectedCheckOut;
  if (!c) return;
  const nights = Math.max(
    1,
    Math.ceil(
      (new Date(c.checkOut) - new Date(c.checkIn)) / (1000 * 60 * 60 * 24),
    ),
  );
  const roomTotal = c.rate * nights;
  const extrasTotal = c.extras.reduce(
    (sum, e) => sum + parseInt(e.match(/₹(\d+)/)?.[1] || 0),
    0,
  );
  const grandTotal = roomTotal + extrasTotal;
  const rows = [
    `<div class="summary-row"><span>Room ${c.room} × ${nights} nights @ ₹${c.rate}</span><span>₹${roomTotal.toLocaleString()}</span></div>`,
  ];
  c.extras.forEach((e) =>
    rows.push(
      `<div class="summary-row"><span>${e.split(":")[0]}</span><span>${e.split(":")[1] || ""}</span></div>`,
    ),
  );
  document.getElementById("summaryRows").innerHTML = rows.join("");
  document.getElementById("summaryTotal").innerHTML =
    `<span>Grand Total</span><span>₹${grandTotal.toLocaleString()}</span>`;
  document.getElementById("coSummary").style.display = "block";
}

window.processCheckIn = function () {
  if (!state.selectedCheckIn) {
    toast("Please select a reservation first", "error");
    return;
  }
  const res = state.selectedCheckIn;
  const idNum = document.getElementById("ciIdNum").value.trim();
  if (!idNum) {
    toast("Please enter ID proof number", "error");
    return;
  }
  const room = state.rooms.find((r) => r.number === res.room);
  if (room) {
    room.status = "occupied";
    room.guest = res.guest;
  }
  state.checkedIn.unshift({
    reservationId: res.id,
    guest: res.guest,
    room: res.room,
    checkIn: todayStr(),
    checkOut: res.checkOut,
    rate: room?.rate || 2500,
    extras: [],
  });
  res.status = "checked-in";
  renderCheckedInList();
  document.getElementById("ciResults").innerHTML =
    '<div style="font-size:.9rem;color:var(--success);padding:.5rem">✓ Check-in successful!</div>';
  state.selectedCheckIn = null;
  document.getElementById("ciIdNum").value = "";
  toast(`${res.guest} checked in to Room ${res.room}`, "success");
};

window.processCheckOut = function () {
  if (!state.selectedCheckOut) {
    toast("Please select a guest", "error");
    return;
  }
  const c = state.selectedCheckOut;
  const room = state.rooms.find((r) => r.number === c.room);
  if (room) {
    room.status = "cleaning";
    room.guest = "";
  }
  state.checkedIn = state.checkedIn.filter(
    (x) => x.reservationId !== c.reservationId,
  );
  const res = state.reservations.find((r) => r.id === c.reservationId);
  if (res) res.status = "checked-out";
  renderCheckedInList();
  document.getElementById("coResults").innerHTML = "";
  document.getElementById("coSummary").style.display = "none";
  state.selectedCheckOut = null;
  toast(
    `${c.guest} checked out from Room ${c.room}. Invoice generated.`,
    "success",
  );
};

function renderCheckedInList() {
  const list = document.getElementById("checkedInList");
  if (!list) return;
  list.innerHTML =
    state.checkedIn
      .map(
        (c) => `
    <div class="ci-active-item">
      <div class="ci-active-room">Room ${c.room}</div>
      <div class="ci-active-name">${c.guest}</div>
      <div class="ci-active-meta">In: ${c.checkIn} · Out: ${c.checkOut}</div>
    </div>
  `,
      )
      .join("") ||
    '<div style="color:var(--text3);font-size:.85rem">No guests currently checked in.</div>';
}

// ===== GUESTS =====
function renderGuests(search = "") {
  let guests = state.guests;
  if (search)
    guests = guests.filter(
      (g) =>
        (g.firstName + " " + g.lastName)
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        g.email.toLowerCase().includes(search.toLowerCase()) ||
        g.phone.includes(search),
    );
  document.getElementById("guestBody").innerHTML =
    guests
      .map(
        (g) => `
    <tr>
      <td><strong>${g.id}</strong></td>
      <td>${g.firstName} ${g.lastName}</td>
      <td>${g.email}</td>
      <td>${g.phone}</td>
      <td>${g.nationality}</td>
      <td><span class="badge">${g.visits}</span></td>
      <td><span class="status-badge ${g.status}">${g.status}</span></td>
      <td><div class="table-actions">
        <button class="action-btn danger" onclick="deleteGuest('${g.id}')" title="Delete"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>
  `,
      )
      .join("") ||
    '<tr><td colspan="8" style="color:var(--text3);text-align:center;padding:1.5rem">No guests found.</td></tr>';
}

function initGuestSearch() {
  document
    .getElementById("guestSearch")
    .addEventListener("input", (e) => renderGuests(e.target.value));
}

function addGuest() {
  const firstName = document.getElementById("gFirstName").value.trim();
  const lastName = document.getElementById("gLastName").value.trim();
  const email = document.getElementById("gEmail").value.trim();
  const phone = document.getElementById("gPhone").value.trim();
  const nationality =
    document.getElementById("gNationality").value.trim() || "Indian";
  const dob = document.getElementById("gDob").value;
  const address = document.getElementById("gAddress").value.trim();
  if (!firstName || !lastName || !email) {
    toast("Please fill all required fields", "error");
    return;
  }
  const id = `G00${state.nextId.guest++}`;
  state.guests.unshift({
    id,
    firstName,
    lastName,
    email,
    phone,
    nationality,
    dob,
    address,
    visits: 0,
    status: "active",
  });
  closeModal("addGuestModal");
  renderGuests();
  toast(`Guest ${firstName} ${lastName} added`, "success");
  [
    "gFirstName",
    "gLastName",
    "gEmail",
    "gPhone",
    "gNationality",
    "gDob",
    "gAddress",
  ].forEach((i) => (document.getElementById(i).value = ""));
}

function deleteGuest(id) {
  state.guests = state.guests.filter((g) => g.id !== id);
  renderGuests();
  toast("Guest removed", "info");
}

// ===== BILLING =====
function renderBilling() {
  document.getElementById("billingBody").innerHTML = state.bills
    .map(
      (b) => `
    <tr>
      <td><strong>${b.id}</strong></td>
      <td>${b.guest}</td>
      <td>${b.room}</td>
      <td>${b.period}</td>
      <td>₹${b.roomCharges.toLocaleString()}</td>
      <td>₹${b.extras.toLocaleString()}</td>
      <td><strong>₹${b.total.toLocaleString()}</strong></td>
      <td><span class="status-badge ${b.status}">${b.status.charAt(0).toUpperCase() + b.status.slice(1)}</span></td>
      <td><div class="table-actions">
        <button class="action-btn" onclick="markPaid('${b.id}')" title="Mark Paid"><i class="fa-solid fa-check-double"></i></button>
        <button class="action-btn" onclick="printBill('${b.id}')" title="Print"><i class="fa-solid fa-print"></i></button>
      </div></td>
    </tr>
  `,
    )
    .join("");
}

function addBill() {
  const guest = document.getElementById("billGuest").value.trim();
  const room = document.getElementById("billRoom").value.trim();
  const rc = parseInt(document.getElementById("billRoom$").value) || 0;
  const food = parseInt(document.getElementById("billFood").value) || 0;
  const laundry = parseInt(document.getElementById("billLaundry").value) || 0;
  const other = parseInt(document.getElementById("billOther").value) || 0;
  if (!guest) {
    toast("Guest name required", "error");
    return;
  }
  const extras = food + laundry + other;
  const total = rc + extras;
  const id = `INV00${state.nextId.bill++}`;
  const today = new Date();
  state.bills.unshift({
    id,
    guest,
    room,
    period: `${today.toLocaleDateString("en-IN", { month: "short", day: "numeric" })}`,
    roomCharges: rc,
    extras,
    total,
    status: "unpaid",
    method: "Pending",
  });
  closeModal("addBillModal");
  renderBilling();
  toast(`Invoice ${id} created — ₹${total.toLocaleString()}`, "success");
}

function markPaid(id) {
  const b = state.bills.find((x) => x.id === id);
  if (b) {
    b.status = "paid";
    renderBilling();
    toast(`${id} marked as paid`, "success");
  }
}
function printBill(id) {
  toast(`Invoice ${id} sent to printer`, "info");
}

// ===== REPORTS =====
function renderReports() {
  const tabs = document.querySelectorAll(".rtab");
  tabs.forEach((t) => {
    t.addEventListener("click", () => {
      tabs.forEach((x) => x.classList.remove("active"));
      t.classList.add("active");
      showReport(t.dataset.report);
    });
  });
  showReport("occupancy");
}

function showReport(type) {
  const content = document.getElementById("reportContent");
  if (type === "occupancy") {
    content.innerHTML = `
      <div class="report-kpi-grid">
        <div class="report-kpi"><div class="report-kpi-val">60%</div><div class="report-kpi-label">Average Occupancy</div></div>
        <div class="report-kpi"><div class="report-kpi-val">24</div><div class="report-kpi-label">Rooms Occupied</div></div>
        <div class="report-kpi"><div class="report-kpi-val">4.2</div><div class="report-kpi-label">Avg. Stay (days)</div></div>
        <div class="report-kpi"><div class="report-kpi-val">92%</div><div class="report-kpi-label">Weekend Peak</div></div>
      </div>
      <h4 style="font-family:var(--font-display);margin-bottom:.5rem">Monthly Occupancy (%)</h4>
      <div class="bar-chart-large" id="reportChart"></div>
    `;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const vals = [72, 68, 80, 60, 85, 90];
    document.getElementById("reportChart").innerHTML = months
      .map(
        (m, i) => `
      <div class="bar-wrap">
        <div class="bar-track"><div class="bar-fill" style="height:${vals[i]}%;background:linear-gradient(to top,var(--gold),var(--gold-light))"></div></div>
        <span class="bar-label">${m}<br><span style="color:var(--text2)">${vals[i]}%</span></span>
      </div>
    `,
      )
      .join("");
  } else if (type === "revenue") {
    content.innerHTML = `
      <div class="report-kpi-grid">
        <div class="report-kpi"><div class="report-kpi-val">₹8.4L</div><div class="report-kpi-label">This Month</div></div>
        <div class="report-kpi"><div class="report-kpi-val">₹1.24L</div><div class="report-kpi-label">Today</div></div>
        <div class="report-kpi"><div class="report-kpi-val">₹4,860</div><div class="report-kpi-label">Avg. Daily Rate</div></div>
        <div class="report-kpi"><div class="report-kpi-val">+12%</div><div class="report-kpi-label">vs Last Month</div></div>
      </div>
      <h4 style="font-family:var(--font-display);margin-bottom:.5rem">Monthly Revenue (₹ Lakhs)</h4>
      <div class="bar-chart-large" id="reportChart"></div>
    `;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const vals = [65, 58, 75, 84, 80, 90];
    document.getElementById("reportChart").innerHTML = months
      .map(
        (m, i) => `
      <div class="bar-wrap">
        <div class="bar-track"><div class="bar-fill" style="height:${vals[i]}%;background:linear-gradient(to top,var(--accent2),#6bd9c6)"></div></div>
        <span class="bar-label">${m}<br><span style="color:var(--text2)">₹${vals[i] / 10}L</span></span>
      </div>
    `,
      )
      .join("");
  } else {
    content.innerHTML = `
      <div class="report-kpi-grid">
        <div class="report-kpi"><div class="report-kpi-val">248</div><div class="report-kpi-label">Total Guests (MTD)</div></div>
        <div class="report-kpi"><div class="report-kpi-val">38%</div><div class="report-kpi-label">Repeat Guests</div></div>
        <div class="report-kpi"><div class="report-kpi-val">4.7★</div><div class="report-kpi-label">Avg. Rating</div></div>
        <div class="report-kpi"><div class="report-kpi-val">62%</div><div class="report-kpi-label">Direct Bookings</div></div>
      </div>
      <h4 style="font-family:var(--font-display);margin-bottom:.5rem">Guest Nationality Distribution</h4>
      <div style="display:flex;flex-direction:column;gap:.6rem;margin-top:.5rem">
        ${[
          ["Indian", "72%"],
          ["British", "8%"],
          ["American", "7%"],
          ["German", "5%"],
          ["Others", "8%"],
        ]
          .map(
            ([n, p]) => `
          <div style="display:flex;align-items:center;gap:1rem">
            <div style="width:80px;font-size:.82rem;color:var(--text2)">${n}</div>
            <div style="flex:1;height:20px;background:var(--surface2);border-radius:4px;overflow:hidden">
              <div style="height:100%;width:${p};background:linear-gradient(90deg,var(--gold),var(--gold-light));border-radius:4px"></div>
            </div>
            <div style="width:36px;font-size:.82rem;color:var(--text3);text-align:right">${p}</div>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
  }
}

// ===== HOUSEKEEPING =====
function renderHousekeeping() {
  const pending = state.hkTasks.filter((t) => t.status === "pending");
  const progress = state.hkTasks.filter((t) => t.status === "progress");
  const done = state.hkTasks.filter((t) => t.status === "done");
  document.getElementById("hkPending").innerHTML =
    pending.map((t) => hkTaskHtml(t)).join("") ||
    '<div style="color:var(--text3);font-size:.82rem;padding:.5rem">No pending tasks</div>';
  document.getElementById("hkProgress").innerHTML =
    progress.map((t) => hkTaskHtml(t)).join("") ||
    '<div style="color:var(--text3);font-size:.82rem;padding:.5rem">None in progress</div>';
  document.getElementById("hkDone").innerHTML =
    done.map((t) => hkTaskHtml(t)).join("") ||
    '<div style="color:var(--text3);font-size:.82rem;padding:.5rem">No completed tasks</div>';
}

function hkTaskHtml(t) {
  return `<div class="hk-task">
    <div class="hk-task-room">Room ${t.room}</div>
    <div class="hk-task-type">${t.type}</div>
    ${t.notes ? `<div style="font-size:.75rem;color:var(--text3);margin-top:.25rem">${t.notes}</div>` : ""}
    <div class="hk-task-footer">
      <span class="hk-task-staff">${t.staff}</span>
      <span class="priority-badge ${t.priority}">${t.priority}</span>
    </div>
    <div class="hk-task-actions" style="margin-top:.5rem">
      ${t.status === "pending" ? `<button class="action-btn" onclick="advanceHk('${t.id}')" style="font-size:.72rem;width:auto;padding:.2rem .5rem">Start</button>` : ""}
      ${t.status === "progress" ? `<button class="action-btn" onclick="advanceHk('${t.id}')" style="font-size:.72rem;width:auto;padding:.2rem .5rem">Complete</button>` : ""}
      <button class="action-btn danger" onclick="deleteHk('${t.id}')" title="Delete"><i class="fa-solid fa-trash"></i></button>
    </div>
  </div>`;
}

window.advanceHk = function (id) {
  const t = state.hkTasks.find((x) => x.id === id);
  if (!t) return;
  if (t.status === "pending") t.status = "progress";
  else if (t.status === "progress") {
    t.status = "done";
    const room = state.rooms.find((r) => r.number === t.room);
    if (room && room.status === "cleaning") room.status = "available";
  }
  renderHousekeeping();
  toast(`Task ${id} updated`, "success");
};
window.deleteHk = function (id) {
  state.hkTasks = state.hkTasks.filter((x) => x.id !== id);
  renderHousekeeping();
  toast("Task removed", "info");
};

function addHkTask() {
  const room = document.getElementById("hkRoom").value.trim();
  const type = document.getElementById("hkType").value;
  const staff = document.getElementById("hkStaff").value.trim();
  const priority = document.getElementById("hkPriority").value;
  const notes = document.getElementById("hkNotes").value.trim();
  if (!room || !staff) {
    toast("Room and staff required", "error");
    return;
  }
  const id = `HK00${state.nextId.hk++}`;
  state.hkTasks.unshift({
    id,
    room,
    type,
    staff,
    priority,
    status: "pending",
    notes,
  });
  closeModal("addTaskModal");
  renderHousekeeping();
  toast(`Task ${id} created`, "success");
  ["hkRoom", "hkStaff", "hkNotes"].forEach(
    (i) => (document.getElementById(i).value = ""),
  );
}

// ===== RESTAURANT =====
function renderRestaurant() {
  document.getElementById("restaurantBody").innerHTML = state.orders
    .map(
      (o) => `
    <tr>
      <td><strong>${o.id}</strong></td>
      <td>${o.location}</td>
      <td style="max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o.items}</td>
      <td>₹${o.amount.toLocaleString()}</td>
      <td>${o.time}</td>
      <td><span class="status-badge ${o.status}">${o.status.charAt(0).toUpperCase() + o.status.slice(1)}</span></td>
      <td><div class="table-actions">
        <button class="action-btn" onclick="deliverOrder('${o.id}')" title="Mark Delivered"><i class="fa-solid fa-check"></i></button>
        <button class="action-btn danger" onclick="cancelOrder('${o.id}')" title="Cancel"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>
  `,
    )
    .join("");
}

function addOrder() {
  const location = document.getElementById("ordRoom").value.trim();
  const type = document.getElementById("ordType").value;
  const items = document.getElementById("ordItems").value.trim();
  const amount = parseInt(document.getElementById("ordAmount").value) || 0;
  if (!location || !items) {
    toast("Please fill all required fields", "error");
    return;
  }
  const id = `ORD00${state.nextId.ord++}`;
  const now = new Date();
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  state.orders.unshift({
    id,
    location,
    items,
    amount,
    time,
    status: "preparing",
    type,
  });
  closeModal("addOrderModal");
  renderRestaurant();
  toast(`Order ${id} placed`, "success");
  ["ordRoom", "ordItems", "ordAmount", "ordNotes"].forEach(
    (i) => (document.getElementById(i).value = ""),
  );
}

window.deliverOrder = function (id) {
  const o = state.orders.find((x) => x.id === id);
  if (o) {
    o.status = "delivered";
    renderRestaurant();
    toast(`Order ${id} delivered`, "success");
  }
};
window.cancelOrder = function (id) {
  state.orders = state.orders.filter((x) => x.id !== id);
  renderRestaurant();
  toast("Order removed", "info");
};

// ===== STAFF =====
function renderStaff() {
  document.getElementById("staffBody").innerHTML = state.staff
    .map(
      (s) => `
    <tr>
      <td><strong>${s.id}</strong></td>
      <td>${s.name}</td>
      <td>${s.dept}</td>
      <td>${s.role}</td>
      <td>${s.shift}</td>
      <td>${s.phone}</td>
      <td><span class="status-badge ${s.status}">${s.status.replace("-", " ")}</span></td>
      <td><div class="table-actions">
        <button class="action-btn" onclick="toggleStaff('${s.id}')" title="Toggle Status"><i class="fa-solid fa-rotate"></i></button>
        <button class="action-btn danger" onclick="deleteStaff('${s.id}')" title="Delete"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>
  `,
    )
    .join("");
}

function addStaff() {
  const name = document.getElementById("stName").value.trim();
  const dept = document.getElementById("stDept").value;
  const role = document.getElementById("stRole").value.trim();
  const shift = document.getElementById("stShift").value;
  const phone = document.getElementById("stPhone").value.trim();
  const salary = parseInt(document.getElementById("stSalary").value) || 0;
  if (!name || !role) {
    toast("Name and role required", "error");
    return;
  }
  const id = `ST00${state.nextId.staff++}`;
  state.staff.unshift({
    id,
    name,
    dept,
    role,
    shift,
    phone,
    salary,
    status: "active",
  });
  closeModal("addStaffModal");
  renderStaff();
  toast(`${name} added to staff`, "success");
  ["stName", "stRole", "stPhone", "stSalary"].forEach(
    (i) => (document.getElementById(i).value = ""),
  );
}

window.toggleStaff = function (id) {
  const s = state.staff.find((x) => x.id === id);
  if (s) {
    s.status = s.status === "active" ? "on-leave" : "active";
    renderStaff();
    toast(`${s.name} status updated`, "info");
  }
};
window.deleteStaff = function (id) {
  state.staff = state.staff.filter((x) => x.id !== id);
  renderStaff();
  toast("Staff member removed", "info");
};

// ===== MODAL =====
window.openModal = function (id) {
  if (id === "addReservationModal") populateRoomDropdown();
  document.getElementById(id).classList.add("open");
};
window.closeModal = function (id) {
  document.getElementById(id).classList.remove("open");
};
// Close on overlay click
document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("open");
  });
});

// ===== TOAST =====
function toast(msg, type = "info") {
  const icons = { success: "✓", error: "✕", info: "ℹ" };
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.innerHTML = `<span>${icons[type] || "•"}</span>${msg}`;
  document.getElementById("toastContainer").appendChild(el);
  setTimeout(() => {
    el.style.animation = "slideOut .3s ease forwards";
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

// ===== HELPERS =====
function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

// ===== SIDEBAR TOGGLE =====
document.getElementById("sidebarToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

// ===== FILTER BUTTONS (reservation page) =====
document.querySelectorAll("#page-reservations .filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("#page-reservations .filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initDate();
  initRoomFilters();
  initResFilters();
  initGuestSearch();
  renderDashboard();
});
