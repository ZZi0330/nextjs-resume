"use client";

import { Github } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * 登录组件 - 笔记应用的登录界面
 * 包含邮箱密码登录和GitHub链接
 */
const Login = () => {
   const router = useRouter();
   const { t } = useLanguage();

  // 处理登录逻辑
  const handleLogin = async () => {
    // 获取输入框的值
    const email = document.querySelector<HTMLInputElement>('input[type="text"]')?.value;
    const password = document.querySelector<HTMLInputElement>('input[type="password"]')?.value;

    try {
      // 发送登录请求
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();
      console.log(result);

      if (result.success) {
        // 登录成功，保存token并跳转
        localStorage.setItem("authToken", result.token);
        router.push("/project2/notes");
      } else {
        alert(t('project2.loginError'));
      }
    } catch (err) {
      console.error("登录请求失败:", err);
      alert(t('project2.serverError'));
    }
  };
  
  return (
    <>
      <div className="login-container">
        <h1 className="text-gradient text-max">{t('project2.title')}</h1>
        <h2>{t('project2.subtitle')}</h2>
        <p>{t('project2.description')}</p>
        <div></div>
        <h2 className="text-gradient text-large">{t('project2.login')}</h2>

        <div>
          <p>{t('project2.email')}</p>
         <input type="text" defaultValue="test@example.com" />
        </div>

        <div>
          <p>{t('project2.password')}</p>
          <input type="password" defaultValue="123456" />
        </div>
         <button className="submit-btn" onClick={handleLogin}>
          <h6>{t('project2.confirm')}</h6>
        </button>

     

        <div className="full-line"></div>
        <footer>
          <a target="_blank" href="https://github.com/ZZi0330">
            <img
              alt="pfp"
              src="https://avatars.githubusercontent.com/u/187590397?v=4"
            />
            <h6>@ZZi0330</h6>
            <Github size={24} />
          </a>
        </footer>
      </div>
    </>
  );
};

export default Login;
