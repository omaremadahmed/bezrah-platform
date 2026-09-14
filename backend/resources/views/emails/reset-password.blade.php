<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f4f6f5;
            color: #333333;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            margin-top: 40px;
            margin-bottom: 40px;
        }
        .header {
            background-color: #0f4c3a;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 24px;
            font-weight: 700;
        }
        .content {
            padding: 40px 30px;
        }
        .button {
            display: inline-block;
            background-color: #8c9926;
            color: #ffffff !important;
            text-decoration: none;
            padding: 14px 28px;
            border-radius: 4px;
            font-weight: 600;
            margin: 20px 0;
            text-align: center;
        }
        .button:hover {
            background-color: #7a8620;
        }
        .fallback-link {
            font-size: 13px;
            color: #666666;
            word-break: break-all;
            margin-top: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border-radius: 4px;
        }
        .footer {
            background-color: #f4f6f5;
            padding: 20px;
            text-align: center;
            font-size: 13px;
            color: #888888;
            border-top: 1px solid #eeeeee;
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <div class="header">
            <h1>🌱 Bazrah Food Industries</h1>
        </div>
        <div class="content">
            <h2>Reset Your Password</h2>
            <p>Hello,</p>
            <p>We received a request to reset the password for your Bazrah account. You can reset your password by clicking the button below:</p>
            
            <div style="text-align: center;">
                <a href="{{ $url }}" class="button">Reset Password</a>
            </div>
            
            <p style="color: #666;"><strong>Note:</strong> This link will expire in 60 minutes. If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
            
            <div class="fallback-link">
                If you're having trouble clicking the "Reset Password" button, copy and paste the URL below into your web browser:<br>
                <a href="{{ $url }}" style="color: #0f4c3a;">{{ $url }}</a>
            </div>
        </div>
        <div class="footer">
            &copy; {{ date('Y') }} Bazrah Food Industries. All rights reserved.
        </div>
    </div>
</body>
</html>
