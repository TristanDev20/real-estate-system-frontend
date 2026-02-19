function BuyerDashboard() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Buyer Dashboard</h1>

      <div className="card p-4 shadow-sm mb-4">
        <h5>Saved Properties</h5>
        <p>You currently have no saved properties.</p>
      </div>

      <div className="card p-4 shadow-sm mb-4">
        <h5>Reservation Status</h5>
        <p>No active reservations at the moment.</p>
      </div>

      <div className="card p-4 shadow-sm">
        <h5>Upcoming Site Visits</h5>
        <p>No scheduled visits.</p>
      </div>
    </div>
  );
}

export default BuyerDashboard;
