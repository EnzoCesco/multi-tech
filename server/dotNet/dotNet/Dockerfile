#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS develop
WORKDIR /src
COPY . .
RUN dotnet restore "dotNet.csproj"
COPY . .
WORKDIR "/src"
RUN dotnet build "dotNet.csproj" -c Release -o /app/build
ENTRYPOINT ["dotnet", "dotNet.dll"]

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["dotNet/dotNet.csproj", "dotNet/"]
RUN dotnet restore "dotNet/dotNet.csproj"
COPY . .
WORKDIR "/src/dotNet"
RUN dotnet build "dotNet.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "dotNet.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "dotNet.dll"]