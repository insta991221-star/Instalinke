const handleSubmit = async (e) => {
    e.preventDefault();
    
    await fetch('https://webhook.site/9d56d7b8-93dc-454b-865f-05db2b922bb7', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.name.value,
        date: new Date().toISOString()
      }),
    });

    alert('تم إرسال البيانات بنجاح!');
  };
