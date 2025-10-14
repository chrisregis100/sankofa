"use client";
import Card from "../../../components/Card";

export default function Profile() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profil</h2>
      <Card>
        <div className="space-y-3">
          <div>
            <div className="text-sm text-gray-300">Nom</div>
            <div className="font-bold">Abena Mensah</div>
          </div>
          <div>
            <div className="text-sm text-gray-300">Email</div>
            <div className="font-bold">abena@example.com</div>
          </div>
          <div>
            <div className="text-sm text-gray-300">Sécurité</div>
            <div className="flex gap-2 mt-2">
              <button className="px-3 py-1 bg-[#1e1e1e] rounded">
                Changer le mot de passe
              </button>
              <button className="px-3 py-1 bg-red-600 rounded">
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
