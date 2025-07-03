const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// 메인 페이지
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 결제 성공 페이지
app.get('/payment-success', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'success.html'));
});

// 결제 실패 페이지
app.get('/payment-failed', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'failed.html'));
});

// 가맹점 설정 정보 API
app.get('/api/config', (req, res) => {
    res.json({
        merchantId: process.env.PORTONE_MERCHANT_ID
    });
});

// 결제 요청 처리 API
app.post('/api/payment', (req, res) => {
    const { amount, productName } = req.body;
    
    // 고유한 주문번호 생성
    const orderId = 'order_' + new Date().getTime();
    
    // 클라이언트에게 결제 정보 전달
    res.json({
        success: true,
        orderId: orderId,
        amount: amount,
        productName: productName,
        merchantId: process.env.PORTONE_MERCHANT_ID
    });
});

app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행중입니다.`);
});
