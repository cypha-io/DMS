import DashboardLayout from "../components/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 space-y-10">
        {/* Page Header */}
        <div className="relative overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-400/5 dark:to-purple-400/5 animate-gradient"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full -translate-y-8 translate-x-8 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/30 to-blue-400/30 rounded-full translate-y-4 -translate-x-4 animate-pulse"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-custom-blue font-montserrat mb-2 tracking-tight">
              Overview Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-xl font-medium">
              Welcome to your Project Management System
            </p>
          </div>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Column 1 - Takes 8/12 of the space */}
          <div className="xl:col-span-8 space-y-8">
            {/* Top - Student Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/30 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/20 dark:from-blue-400/5 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-widest opacity-80">
                      Total Students
                    </h3>
                    <p className="text-5xl font-black text-custom-blue mb-2 tracking-tight">
                      156
                    </p>
                    <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-semibold">
                      <svg className="w-4 h-4 mr-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7"></path>
                      </svg>
                      +12% from last month
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:rotate-3 animate-pulse-glow">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-ping">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/30 hover:shadow-green-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/20 dark:from-green-400/5 dark:to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-green-600 dark:text-green-400 mb-4 uppercase tracking-widest opacity-80">
                      Assigned
                    </h3>
                    <p className="text-5xl font-black text-green-600 mb-2 tracking-tight">
                      124
                    </p>
                    <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-semibold">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      79.5% completion rate
                    </div>
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/40 transition-all duration-300 group-hover:rotate-3">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/30 hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/20 dark:from-orange-400/5 dark:to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-orange-600 dark:text-orange-400 mb-4 uppercase tracking-widest opacity-80">
                      Unassigned
                    </h3>
                    <p className="text-5xl font-black text-orange-600 mb-2 tracking-tight">
                      32
                    </p>
                    <div className="flex items-center text-orange-600 dark:text-orange-400 text-sm font-semibold">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Needs attention
                    </div>
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/40 transition-all duration-300 group-hover:rotate-3">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle - Quick Actions */}
            <div className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/30 dark:border-gray-700/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-400/3 dark:to-blue-400/3"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-custom-blue mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <button className="group relative overflow-hidden flex flex-col items-center justify-center px-8 py-8 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white font-bold rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 hover:-rotate-1 animate-gradient">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"></div>
                    <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <span className="text-lg tracking-wide relative z-10">Assign Student</span>
                  </button>
                  
                  <button className="group relative overflow-hidden flex flex-col items-center justify-center px-8 py-8 bg-gradient-to-br from-green-600 via-green-700 to-emerald-700 text-white font-bold rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 transform hover:scale-105 hover:rotate-1 animate-gradient">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"></div>
                    <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                    <span className="text-lg tracking-wide relative z-10">View Progress</span>
                  </button>
                  
                  <button className="group relative overflow-hidden flex flex-col items-center justify-center px-8 py-8 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-700 text-white font-bold rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 hover:-rotate-1 animate-gradient">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"></div>
                    <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span className="text-lg tracking-wide relative z-10">View Proposals</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom - Recent Activities */}
            <div className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/30">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-400/3 dark:to-purple-400/3"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-gray-50/80 to-gray-100/80 dark:from-gray-700/80 dark:to-gray-600/80 backdrop-blur-sm p-8 border-b border-gray-200/50 dark:border-gray-600/50">
                  <h3 className="text-2xl font-bold text-custom-blue flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    Recent Activities
                  </h3>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    {[
                      { action: "New student assigned to project", time: "2 hours ago", type: "assignment", user: "Admin" },
                      { action: "Proposal submitted by John Smith", time: "4 hours ago", type: "proposal", user: "John Smith" },
                      { action: "Defense scheduled for next week", time: "1 day ago", type: "defense", user: "Dr. Anderson" },
                      { action: "Supervisor approved project outline", time: "2 days ago", type: "approval", user: "Prof. Johnson" },
                    ].map((activity, index) => (
                      <div key={index} className="group flex items-center space-x-6 p-6 bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-700/60 dark:to-gray-600/60 backdrop-blur-sm rounded-xl hover:from-white/80 hover:to-gray-50/80 dark:hover:from-gray-700/80 dark:hover:to-gray-600/80 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-white/30 dark:border-gray-600/30">
                        <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg ${
                          activity.type === 'assignment' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                          activity.type === 'proposal' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                          activity.type === 'defense' ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                          'bg-gradient-to-br from-purple-500 to-purple-600'
                        }`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-custom-blue transition-colors">
                            {activity.action}
                          </p>
                          <div className="flex items-center space-x-3 mt-2">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-white/60 dark:bg-gray-700/60 px-3 py-1 rounded-full">
                              by {activity.user}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {activity.time}
                            </span>
                          </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Sidebar content */}
          <div className="xl:col-span-4 space-y-8">
            {/* Progress Overview */}
            <div className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/30 dark:border-gray-700/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/3 dark:to-purple-400/3"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-custom-blue mb-6 flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  Progress Overview
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Project Completion</span>
                      <span className="font-bold text-custom-blue">79%</span>
                    </div>
                    <div className="w-full bg-gray-200/60 dark:bg-gray-700/60 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full w-[79%] shadow-lg transform transition-all duration-1000 ease-out"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Defense Schedule</span>
                      <span className="font-bold text-green-600">65%</span>
                    </div>
                    <div className="w-full bg-gray-200/60 dark:bg-gray-700/60 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full w-[65%] shadow-lg transform transition-all duration-1000 ease-out"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Proposals Reviewed</span>
                      <span className="font-bold text-purple-600">92%</span>
                    </div>
                    <div className="w-full bg-gray-200/60 dark:bg-gray-700/60 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full w-[92%] shadow-lg transform transition-all duration-1000 ease-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/30 dark:border-gray-700/30">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 dark:from-red-400/3 dark:to-orange-400/3"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-custom-blue mb-6 flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  Upcoming Deadlines
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Project Proposal Due", date: "July 15, 2025", urgent: true, days: "10 days left" },
                    { title: "Mid-term Review", date: "July 22, 2025", urgent: false, days: "17 days left" },
                    { title: "Final Defense", date: "August 5, 2025", urgent: false, days: "31 days left" },
                  ].map((deadline, index) => (
                    <div key={index} className={`group relative overflow-hidden p-5 rounded-xl transition-all duration-300 hover:scale-105 ${deadline.urgent ? 'bg-gradient-to-br from-red-50/80 to-orange-50/80 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200/60 dark:border-red-700/60 hover:shadow-red-500/20' : 'bg-gradient-to-br from-gray-50/80 to-gray-100/80 dark:from-gray-700/60 dark:to-gray-600/60 border border-gray-200/40 dark:border-gray-600/40 hover:shadow-gray-500/10'} backdrop-blur-sm shadow-lg hover:shadow-xl`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className={`text-base font-bold mb-1 ${deadline.urgent ? 'text-red-800 dark:text-red-300' : 'text-gray-800 dark:text-gray-200'}`}>
                            {deadline.title}
                          </p>
                          <p className={`text-sm mb-2 ${deadline.urgent ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                            {deadline.date}
                          </p>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${deadline.urgent ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-700/60 dark:text-gray-300'}`}>
                            {deadline.days}
                          </span>
                        </div>
                        {deadline.urgent && (
                          <div className="flex-shrink-0 ml-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}