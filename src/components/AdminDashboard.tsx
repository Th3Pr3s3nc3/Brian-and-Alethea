import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function AdminDashboard() {
  const [invites, setInvites] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchInvites()
  }, [])

  async function fetchInvites() {
    // Fetch all invitations, ordered by newest first
    const { data, error } = await supabase
      .from('invitations')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) {
      setInvites(data)
    } else {
      console.error('Error fetching invites:', error)
    }
    setLoading(false)
  }

  // Calculate the stats
  const totalInvites = invites.length
  const attending = invites.filter(i => i.rsvp_status === 'attending').length
  const declined = invites.filter(i => i.rsvp_status === 'declined').length
  const pending = invites.filter(i => i.rsvp_status === 'pending').length

  if (loading) {
    return <div className="p-10 text-center text-[#8b5a6b]">Loading dashboard...</div>
  }

  return (
    <div className="min-h-screen bg-[#fef5f7] p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl text-[#5c3040] mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
          Wedding Admin Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#efc3cf] text-center">
            <p className="text-sm text-[#8b5a6b] uppercase tracking-wider">Total Sent</p>
            <p className="text-4xl font-bold text-[#5c3040] mt-2">{totalInvites}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#efc3cf] text-center">
            <p className="text-sm text-[#8b5a6b] uppercase tracking-wider">Attending</p>
            <p className="text-4xl font-bold text-green-600 mt-2">{attending}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#efc3cf] text-center">
            <p className="text-sm text-[#8b5a6b] uppercase tracking-wider">Declined</p>
            <p className="text-4xl font-bold text-red-500 mt-2">{declined}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#efc3cf] text-center">
            <p className="text-sm text-[#8b5a6b] uppercase tracking-wider">Pending</p>
            <p className="text-4xl font-bold text-yellow-600 mt-2">{pending}</p>
          </div>
        </div>

        {/* Guest List Table */}
        <div className="bg-white rounded-2xl shadow-md border border-[#efc3cf] overflow-hidden">
          <div className="p-6 border-b border-[#efc3cf]">
            <h2 className="text-2xl text-[#5c3040]" style={{ fontFamily: 'Playfair Display, serif' }}>Guest List</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#fef5f7] text-[#8b5a6b] uppercase text-xs tracking-wider">
                <tr>
                  <th className="p-4">Guest Name</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Invite Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0c5d0]">
                {invites.map((invite) => (
                  <tr key={invite.id} className="hover:bg-[#fef5f7]/50">
                    <td className="p-4 text-[#5c3040] font-medium">{invite.guest_name}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        invite.rsvp_status === 'attending' ? 'bg-green-100 text-green-700' :
                        invite.rsvp_status === 'declined' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {invite.rsvp_status}
                      </span>
                    </td>
                    <td className="p-4">
                      <a 
                        href={invite.invite_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#d4869c] hover:underline text-sm"
                      >
                        View Link
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}