// check.js
(async function() {
    const savedName = localStorage.getItem('name');
    const savedPassword = localStorage.getItem('pw');
    
    if (!savedName || !savedPassword) {
        window.location.href = 'index.html';
        return;
    }
    
    try {
        const response = await fetch(
            `https://isflhjerhosklljnwszx.supabase.co/rest/v1/Login?name=eq.${encodeURIComponent(savedName)}&pw=eq.${encodeURIComponent(savedPassword)}`,
            {
                headers: {
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzZmxoamVyaG9za2xsam53c3p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1NDE5OTMsImV4cCI6MjA4MTExNzk5M30.t-3Js7V2lA7QboUDzfV2DBVp6xixH6C13OC-XYRWD0E',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzZmxoamVyaG9za2xsam53c3p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1NDE5OTMsImV4cCI6MjA4MTExNzk5M30.t-3Js7V2lA7QboUDzfV2DBVp6xixH6C13OC-XYRWD0E'
                }
            }
        );
        
        if (!response.ok) {
            window.location.href = 'index.html';
            return;
        }
        
        const Login = await response.json();
        
        if (!Login || Login.length === 0) {
            window.location.href = 'index.html';
            return;
        }
        
        if (Login[0].name !== savedName || Login[0].pw !== savedPassword) {
            window.location.href = 'index.html';
            return;
        }
        
        // Authentication successful, continue loading the page
        console.log('Authentication successful');
        
    } catch (error) {
        console.error('Error:', error);
        window.location.href = 'index.html';
    }
})();
