# 포트원 결제 시스템

카카오페이를 이용한 간단한 결제 시스템입니다.

## 기능
- 카카오페이 결제 연동
- 결제 성공/실패 페이지
- 환경변수를 통한 보안 설정

## 로컬 실행
```bash
npm install
npm start
```

## 환경변수 설정
`.env` 파일에 다음을 추가:
```
PORTONE_CLIENT_KEY=your_client_key
PORTONE_SECRET_KEY=your_secret_key  
PORTONE_MERCHANT_ID=your_merchant_id
```

## 배포
Vercel, Railway, Render 등에서 배포 가능합니다.