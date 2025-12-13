import Image from "next/image";

export default function Home() {
  return (
  <main className="container mx-auto max-w-200">
    <div id="orders-container">
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Status</th>
            <th>Type</th>
            <th>Total</th>            
          </tr>
        </thead>
      </table>
    </div>
    </main>
  );
}
